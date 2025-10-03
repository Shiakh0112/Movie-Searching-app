// MovieCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const PLACEHOLDER = "https://via.placeholder.com/400x600?text=No+Image";

const MovieCard = ({ movie }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const poster =
    movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER;

  return (
    <Link
      to={movie?.imdbID ? `/movie/${movie.imdbID}` : "#"}
      aria-label={`View details for ${movie?.Title || "Movie"}`}
      className="group block relative w-full"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative">
        {/* Skeleton Loader */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Poster Image */}
        <img
          src={poster}
          alt={movie?.Title || "Movie Poster"}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PLACEHOLDER;
            setImgLoaded(true);
          }}
          className={`w-full h-[400px] object-cover transition-opacity duration-300 rounded-t-xl ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Type Badge */}
        {movie?.Type && (
          <span className="absolute top-3 left-3 bg-black/60 text-white text-xs md:text-sm px-2 py-0.5 rounded-md backdrop-blur-sm">
            {movie.Type}
          </span>
        )}

        {/* Info */}
        <div className="p-3 md:p-4">
          <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1 line-clamp-2">
            {movie?.Title || "Unknown Title"}
          </h3>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{movie?.Year || "—"}</span>
            <span className="text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
