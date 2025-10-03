import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

// movieKeywords.js (yahi file me direct daal diya)
export const movieKeywords = [
  "Avengers",
  "Batman",
  "Spiderman",
  "Harry Potter",
  "Lord of the Rings",
  "Iron Man",
  "Thor",
  "Captain America",
  "Doctor Strange",
  "Black Panther",
  "Inception",
  "Interstellar",
  "Titanic",
  "The Matrix",
  "The Dark Knight",
  "Joker",
  "Frozen",
  "Toy Story",
  "Finding Nemo",
  "Minions",
  "Game of Thrones",
  "Breaking Bad",
  "Stranger Things",
  "Money Heist",
  "Friends",
  "The Office",
  "Sherlock",
  "Peaky Blinders",
  "Squid Game",
  "Wednesday",
  "The Witcher",
];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [keyword, setKeyword] = useState("movie");

  const fetchMovies = async () => {
    const data = await searchMovies(keyword, page);
    setMovies(data.Search || []);
    setTotalResults(Number(data.totalResults));
  };

  useEffect(() => {
    fetchMovies();
  }, [page, keyword]);

  const totalPages = Math.ceil(totalResults / 22);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
        🎬 Showing results for{" "}
        <span className="text-blue-600">"{keyword}"</span>
      </h2>

      {/* Buttons to change keyword */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {movieKeywords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => {
              setKeyword(word);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition duration-200 ${
              word === keyword
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 w-full max-w-6xl">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Home;
