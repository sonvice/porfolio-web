import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import CardPostClient from "./CardPostClient.jsx";

// Normalizar texto (minúsculas + sin tildes)
const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// Resaltador seguro
const highlightMatches = (text, terms) => {
  if (!terms?.length) return text;

  let parts = [text];

  terms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");

    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part]; // ya es JSX
      return part.split(regex).map((p, i) =>
        regex.test(p) ? (
          <mark key={crypto.randomUUID()} className="bg-yellow-200">
            {p}
          </mark>
        ) : (
          p
        )
      );
    });
  });

  return parts;
};

export default function SearchEngine({ posts = [], allPosts = [], initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(posts);
  const inputRef = useRef(null);

  // Debounce estable
  const debounceRef = useRef(null);
  const debounced = (fn, delay, ...args) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fn(...args), delay);
  };

  // Preprocesamos posts una sola vez
  const indexedPosts = useMemo(
    () =>
      allPosts.map((post) => ({
        ...post,
        _normTitle: normalize(post.data?.title || post.title || ""),
        _normDesc: normalize(post.data?.description || post.description || ""),
        _date: post.data?.date ? new Date(post.data.date) : null,
      })),
    [allPosts]
  );

  const filterPosts = useCallback(
    (q) => {
      const terms = q
        .trim()
        .split(/\s+/)
        .map(normalize)
        .filter(Boolean);

      if (terms.length === 0) {
        setResults(posts);
        return;
      }

      const now = Date.now();

      const matches = indexedPosts
        .map((post) => {
          let score = 0;

          terms.forEach((term) => {
            // coincidencias en título valen más
            if (post._normTitle.includes(term)) score += 5;
            if (post._normDesc.includes(term)) score += 2;

            // coincidencia exacta en palabra del título
            if (post._normTitle.split(" ").includes(term)) score += 8;
          });

          // Bonus para posts recientes
          if (post._date) {
            const ageDays = (now - post._date.getTime()) / (1000 * 60 * 60 * 24);
            const recencyBoost = Math.max(0, 15 - ageDays / 30); // decae lentamente
            score += recencyBoost;
          }

          return score > 0 ? { post, score } : null;
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .map((x) => x.post);

      setResults(matches);
    },
    [indexedPosts, posts]
  );

  useEffect(() => {
    debounced(filterPosts, 200, query);
  }, [query, filterPosts]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Render
  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="search"
        className="px-space-2xs py-space-3xs mb-space-l"
        placeholder="Buscar artículos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.trim() && results.length === 0 && (
        <p className="mt-2 text-sm text-slate-500">
          No se encontraron resultados para "<strong>{query}</strong>"
        </p>
      )}

      <ul role="list" className="mt-6 blog-post | flow">
        {results.map((post) => {
          const title = post.data?.title || post.title || "";
          const desc = post.data?.description || post.description || "";

          const terms = query.trim().split(/\s+/).map(normalize).filter(Boolean);

          const highlightedTitle = highlightMatches(title, terms);
          const highlightedDesc = highlightMatches(desc, terms);

          return (
            <CardPostClient
              key={crypto.randomUUID()}
              post={{
                ...post,
                slug: post.slug || post.id || post.data?.slug || "",
                _highlightedTitle: highlightedTitle,
                _highlightedDesc: highlightedDesc,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
