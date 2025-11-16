export default function CardPostClient({
  post,
  highlightedTitle,
  highlightedDesc,
}) {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = post.data?.date ? new Date(post.data.date) : null;
  const slug = post.slug || post.id || '';   // <-- fallback
const href   = slug ? `/blog/${slug}` : '#';

  return (
    <li className="mb-6">
      <small className="d-block size--1 my-space-xs">
        {date && (
          <time dateTime={date.toISOString()}>
            {date.toLocaleDateString(undefined, dateOptions)}
          </time>
        )}
      </small>

      <h3 className="size-2">
        <a href={href}>
          {highlightedTitle ?? post.data?.title}
        </a>
      </h3>

      {(post.data?.tags?.length ?? 0) > 0 && (
        <ul role="list" className="tag-block | d-flex my-space-s">
          {post.data.tags.map((tag) => (
            <li key={`${post.slug}-${tag}`} className="tag | size--1">
              <a
                className="p-space-3xs radius bg-color-slate-600 text-color-slate-50"
                href={`/tags/${tag}`}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-2 text-gray-700">
        {highlightedDesc ?? post.data?.description}
      </p>
    </li>
  );
}
