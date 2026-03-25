import { useState } from "react";
import { Link } from "react-router-dom";

const PLACEHOLDER = "https://via.placeholder.com/400x600?text=No+Image";

const MovieCard = ({ movie }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const poster = movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER;

  return (
    <Link
      to={movie?.imdbID ? `/movie/${movie.imdbID}` : "#"}
      aria-label={`View details for ${movie?.Title || "Movie"}`}
      className="group block"
    >
      <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900 transition-all duration-300 group-hover:border-red-600/60 group-hover:shadow-2xl group-hover:shadow-red-900/40 group-hover:-translate-y-1">

        {/* Skeleton */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}

        {/* Poster */}
        <img
          src={poster}
          alt={movie?.Title || "Movie Poster"}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => { e.currentTarget.src = PLACEHOLDER; setImgLoaded(true); }}
          className={`w-full h-[360px] object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

        {/* Type badge */}
        {movie?.Type && (
          <span className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm">
            {movie.Type}
          </span>
        )}

        {/* Hover play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-red-600/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-red-900/50">
            <span className="text-white text-xl ml-1">▶</span>
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-white text-sm leading-tight line-clamp-2 mb-1">
            {movie?.Title || "Unknown Title"}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">{movie?.Year || "—"}</span>
            <span className="text-red-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
