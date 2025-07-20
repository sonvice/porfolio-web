export default function CardPostClient({ post }) {
  const dateOptions = {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  };

  const date = post.data?.date ? new Date(post.data.date) : null;

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
        <a href={`/${post.slug ?? post.id}`}>{post.data?.title}</a>
      </h3>
      <ul role="list" className="tag-block | d-flex mt-space-s">
        {(post.data?.tags ?? []).map((tag) => (
          <li key={tag} className="tag | size--1">
            <a
              className="p-space-3xs radius bg-color-slate-600 text-color-slate-50"
              href={`/tags/${tag}`}
            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-gray-700">{post.data?.description}</p>
    </li>
  );
}
