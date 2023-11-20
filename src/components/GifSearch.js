import React, { useState } from "react";

function GifSearch({ onSearchSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a GIF search:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}