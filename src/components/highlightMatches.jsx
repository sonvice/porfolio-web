import React from "react";

// Normaliza texto: minúsculas + sin tildes
export const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// highlightMatches: devuelve JSX seguro para React
export const highlightMatches = (text, terms) => {
  if (!text) return null;
  if (!terms?.length) return text;

  // Inicializamos con el texto completo
  let chunks = [text];

  terms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    const newChunks = [];

    chunks.forEach((chunk) => {
      // Si ya es JSX, lo dejamos tal cual
      if (React.isValidElement(chunk)) {
        newChunks.push(chunk);
        return;
      }

      // Si es string, lo separamos por el término
      const parts = chunk.split(regex);

      parts.forEach((part) => {
        if (!part) return;

        if (regex.test(part)) {
          // Coincidencia: resaltado
          newChunks.push(
            <mark
              key={`mark-${crypto.randomUUID()}`}
              className="bg-yellow-200"
            >
              {part}
            </mark>
          );
        } else {
          // Texto normal envuelto en span con key
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
