import React, { useState } from "react";

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, type);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies or TV series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          onFilterChange(e.target.value);
        }}
      >
        <option value="">All Types</option>
        <option value="movie">Movies</option>
        <option value="series">TV Series</option>
        <option value="episode">Episodes</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
