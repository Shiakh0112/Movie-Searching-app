import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export const movieKeywords = [
  "Avengers", "Batman", "Spiderman", "Harry Potter", "Lord of the Rings",
  "Iron Man", "Thor", "Captain America", "Doctor Strange", "Black Panther",
  "Inception", "Interstellar", "Titanic", "The Matrix", "The Dark Knight",
  "Joker", "Frozen", "Toy Story", "Finding Nemo", "Minions",
  "Game of Thrones", "Breaking Bad", "Stranger Things", "Money Heist",
  "Friends", "The Office", "Sherlock", "Peaky Blinders", "Squid Game",
  "Wednesday", "The Witcher",
];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [keyword, setKeyword] = useState("Avengers");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await searchMovies(keyword, page);
      setMovies(data.Search || []);
      setTotalResults(Number(data.totalResults));
      setLoading(false);
    };
    fetchMovies();
  }, [page, keyword]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-12">
        <h1
          className="text-6xl md:text-8xl font-bold tracking-widest mb-3"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            background: "linear-gradient(90deg, #ff4444, #ffa500, #ff4444)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🎬 MovieHub
        </h1>
        <p className="text-gray-600 text-sm md:text-base tracking-wide">
          Discover the world's greatest films & series
        </p>
      </div>

      {/* Keyword Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {movieKeywords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => { setKeyword(word); setPage(1); }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
              word === keyword
                ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-900/40 scale-105"
                : "bg-transparent text-gray-500 border-gray-800 hover:border-red-700 hover:text-red-400"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gray-800" />
        <span className="text-gray-600 text-xs uppercase tracking-widest">
          Results for <span className="text-red-400 font-semibold">"{keyword}"</span>
        </span>
        <div className="h-px flex-1 bg-gray-800" />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-gray-800 animate-pulse h-[360px]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {movies.map((movie, index) => (
            <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Home;
