import { useState, useEffect, useRef, useCallback } from "react";
import CardPostClient from "./CardPostClient.jsx";

export default function SearchEngine({ posts = [], allPosts = [], initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(posts);
  const isSearching = query.trim().length > 0;

  const inputRef = useRef(null);

  const useDebounce = (fn, delay) => {
    const timeout = useRef(null);
    return useCallback((...args) => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => fn(...args), delay);
    }, [fn, delay]);
  };

const filterPosts = useCallback(
  (q) => {
    const term = q.trim().toLowerCase();
    if (!term) {
      if (document.startViewTransition) {
        document.startViewTransition(() => setResults(posts));
      } else {
        setResults(posts);
      }
      return;
    }

    const matched = allPosts.filter((post) => {
      const title = post.data?.title?.toLowerCase() || "";
      const slug = post.slug?.toLowerCase() || "";
      return title.includes(term) || slug.includes(term);
    });

    const ranked = matched
      .map((post) => {
        const t = post.data?.title?.toLowerCase() || "";
        const s = post.slug?.toLowerCase() || "";
        let score = (t.match(new RegExp(term, "g")) || []).length * 2;
        score += (s.match(new RegExp(term, "g")) || []).length;
        return { post, score };
      })
      .sort((a, b) => b.score - a.score)
      .map((p) => p.post);

    if (document.startViewTransition) {
      document.startViewTransition(() => setResults(ranked));
    } else {
      setResults(ranked);
    }
  },
  [allPosts, posts]
);


  const debouncedFilter = useDebounce(filterPosts, 300);

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
    const adaptedPost = post.data ? post : {
      slug: post.slug || post.id,
      data: {
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
      }
    };
    return <CardPostClient key={crypto.randomUUID()} post={adaptedPost} />
  })}
</ul>
    </div>
  );
}
