// Resaltador con keys seguras
export const highlightMatches = (text, terms) => {
  if (!terms?.length) return text;

  const result = [];

  let chunks = [text];

  terms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    const newChunks = [];

    chunks.forEach((chunk) => {
      if (typeof chunk !== "string") {
        newChunks.push(chunk);
        return;
      }

      const split = chunk.split(regex);

      split.forEach((part) => {
        if (regex.test(part)) {
          newChunks.push(
            <mark
              key={`mark-${crypto.randomUUID()}`}
              className="bg-yellow-200"
            >
              {part}
            </mark>
          );
        } else {
          newChunks.push(
            <span key={`txt-${crypto.randomUUID()}`}>{part}</span>
          );
        }
      });
    });

    chunks = newChunks;
  });

  return chunks;
};