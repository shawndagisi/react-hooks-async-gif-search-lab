import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=pH6pkukxRx59LEtsMfvUvICWmraI3T6V&limit=3`
        );
        const data = await response.json();

        setGifs(data.data);
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h2>GIF Search</h2>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <h2>Search Results</h2>
      <GifList gifs={gifs} />
    </div>
  );
}