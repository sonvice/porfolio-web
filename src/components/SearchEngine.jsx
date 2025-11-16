import { useState, useEffect, useRef, useCallback } from "react";
import CardPostClient from "./CardPostClient.jsx";

// Función para normalizar texto (minúsculas y sin tildes)
const normalize = (str) => str
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");

export default function SearchEngine({ posts = [], allPosts = [], initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(posts);
  const inputRef = useRef(null);
  const isSearching = query.trim().length > 0;

  const useDebounce = (fn, delay) => {
    const timeout = useRef(null);
    return useCallback((...args) => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => fn(...args), delay);
    }, [fn, delay]);
  };

  // Resalta todas las palabras coincidentes
  const highlightMatches = (text, terms) => {
    if (!terms || terms.length === 0) return text;
    const normText = normalize(text);
    let parts = [text];

    terms.forEach((term) => {
      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return [part]; // ya es <mark>
        const regex = new RegExp(`(${term})`, "gi");
        return part.split(regex).map((p, i) =>
          regex.test(p) ? <mark key={crypto.randomUUID()} className="bg-yellow-200">{p}</mark> : p
        );
      });
    });

    return parts;
  };

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

      const matched = allPosts
        .map((post) => {
          const title = post.data?.title || post.title || "";
          const desc = post.data?.description || post.description || "";

          const normTitle = normalize(title);
          const normDesc = normalize(desc);

          // Contar coincidencias
          let score = 0;
          terms.forEach((term) => {
            if (normTitle.includes(term)) score += 2; // título pesa más
            if (normDesc.includes(term)) score += 1;
          });

          return score > 0 ? { post, score } : null;
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .map((p) => p.post);

      setResults(matched);
    },
    [allPosts, posts]
  );

  const debouncedFilter = useDebounce(filterPosts, 250);

  useEffect(() => {
    debouncedFilter(query);
  }, [query, debouncedFilter]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

      {isSearching && results.length === 0 && (
        <p className="mt-2 text-sm text-slate-500">
          No se encontraron resultados para "<strong>{query}</strong>"
        </p>
      )}

      <ul role="list" className="mt-6 blog-post | flow">
        {results.map((post) => {
          const terms = query
            .trim()
            .split(/\s+/)
            .map(normalize)
            .filter(Boolean);

          const originalTitle = post.data?.title || post.title || "";
          const originalDesc = post.data?.description || post.description || "";

          const highlightedTitle = highlightMatches(originalTitle, terms);
          const highlightedDesc = highlightMatches(originalDesc, terms);

          // Adaptar post asegurando slug y evitando undefined
          const adaptedPost = {
            ...post,
            slug: post.slug || post.id || post.data?.slug || "",
            data: {
              ...(post.data ?? {}),
              title: highlightedTitle,
              description: highlightedDesc,
            }
          };

          return (
            <CardPostClient
              key={crypto.randomUUID()}
              post={adaptedPost}
            />
          );
        })}

      </ul>
    </div>
  );
}
