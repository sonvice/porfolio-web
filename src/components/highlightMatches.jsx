import React from "react";

export const highlightMatches = (text, terms) => {
  if (!text) return null;
  if (!terms?.length) return text;

  let chunks = [text];

  terms.forEach((term, termIdx) => {
    const regex = new RegExp(`(${term})`, "gi");
    const newChunks = [];

    chunks.forEach((chunk, chunkIdx) => {
      if (React.isValidElement(chunk)) {
        newChunks.push(chunk);
        return;
      }

      const parts = chunk.split(regex);

      parts.forEach((part, partIdx) => {
        if (!part) return;

        const key = `t${termIdx}-c${chunkIdx}-p${partIdx}`; // determinista

        if (regex.test(part)) {
          newChunks.push(
            <mark key={key} className="bg-yellow-200">
              {part}
            </mark>
          );
        } else {
          newChunks.push(<span key={key}>{part}</span>);
        }
      });
    });

    chunks = newChunks;
  });

  return chunks;
};