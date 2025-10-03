import React, { useState, useEffect } from "react";
import { searchMovies } from "./../services/api";
import Pagination from "./../components/Pagination";
import MovieCard from "./../components/MovieCard";

const SearchPage = () => {
  const [query, setQuery] = useState(""); // input field
  const [searchTerm, setSearchTerm] = useState(""); // final search query
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // ✅ API call only when searchTerm + page change
  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm.trim()) return; // agar empty hai to skip karo

      const data = await searchMovies(searchTerm, page);
      setMovies(data.Search || []);
      setTotalResults(Number(data.totalResults));
    };

    fetchMovies();
  }, [page, searchTerm]);

  // ✅ button click handler
  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchTerm(query); // final search query set hoga
    setPage(1); // nayi search hamesha first page
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 bg-gradient-to-b from-gray-100 to-white">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 text-center animate-fadeIn">
        🎬 Find Your Favorite Movies & Shows
      </h1>

      {/* Search Input */}
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies, series, or actors..."
          className="w-full py-4 px-6 pr-32 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 text-lg transition-all duration-300 placeholder-gray-400"
        />

        <button
          onClick={handleSearch}
          className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-lg transition transform hover:scale-105"
        >
          Search
        </button>
      </div>

      {/* Helper Text */}
      <p className="mt-4 text-gray-500 text-sm md:text-base text-center max-w-md">
        Type any movie, TV series, or actor name and press search to explore
        results.
      </p>

      {/* Results */}
      <div className="mt-10 w-full max-w-6xl">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie, index) => (
              <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
            ))}
          </div>
        ) : (
          searchTerm && (
            <p className="text-center text-gray-500 text-lg mt-10">
              ❌ No movies found for{" "}
              <span className="font-semibold">"{searchTerm}"</span>
            </p>
          )
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default SearchPage;
