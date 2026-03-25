import React, { useState, useEffect } from "react";
import { searchMovies } from "./../services/api";
import Pagination from "./../components/Pagination";
import MovieCard from "./../components/MovieCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm.trim()) return;
      const data = await searchMovies(searchTerm, page);
      setMovies(data.Search || []);
      setTotalResults(Number(data.totalResults));
    };
    fetchMovies();
  }, [page, searchTerm]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchTerm(query);
    setPage(1);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="min-h-[70vh] px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-widest"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            background: "linear-gradient(90deg, #ff4444, #ffa500, #ff4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Find Your Movie
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Search millions of movies, series & episodes
        </p>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-2xl mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-red-600/10 blur-xl pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search movies, series, actors..."
          className="w-full py-4 px-6 pr-36 rounded-full bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-600 text-base transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold rounded-full px-6 transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40"
        >
          Search
        </button>
      </div>

      {/* Results count */}
      {totalResults > 0 && (
        <p className="text-center text-gray-600 text-sm mb-8">
          Found <span className="text-red-400 font-semibold">{totalResults}</span> results for "{searchTerm}"
        </p>
      )}

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto">
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {movies.map((movie, index) => (
              <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
            ))}
          </div>
        ) : (
          searchTerm && (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🎬</p>
              <p className="text-gray-500 text-lg">
                No results for <span className="text-red-400 font-semibold">"{searchTerm}"</span>
              </p>
            </div>
          )
        )}
      </div>

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
};

export default SearchPage;
