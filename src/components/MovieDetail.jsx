import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const MovieDetail = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favStatus = isFavorite(movie.imdbID);

  const handleFavoriteClick = () => {
    favStatus ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
  };

  return (
    <div className="max-w-5xl mx-auto my-10 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-2xl shadow-black/60">
      <div className="flex flex-col md:flex-row">

        {/* Poster */}
        <div className="md:w-2/5 relative">
          {movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
              style={{ minHeight: "400px" }}
            />
          ) : (
            <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gray-800 text-gray-600 text-lg">
              No Poster
            </div>
          )}
          {/* Gradient overlay on poster */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 hidden md:block" />
        </div>

        {/* Details */}
        <div className="md:w-3/5 p-8 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1
              className="text-4xl font-bold mb-1 leading-tight"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                background: "linear-gradient(90deg, #ffffff, #ffa500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {movie.Title}
            </h1>
            <p className="text-gray-500 text-sm mb-5">{movie.Year} • {movie.Runtime} • {movie.Rated}</p>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.Genre?.split(", ").map((g) => (
                <span key={g} className="px-3 py-1 rounded-full text-xs font-semibold border border-red-800/60 text-red-400 bg-red-950/30">
                  {g}
                </span>
              ))}
            </div>

            {/* Plot */}
            <div className="mb-5">
              <h2 className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Plot</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{movie.Plot}</p>
            </div>

            {/* Director & Cast */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-600 mb-1 font-semibold">Director</h2>
                <p className="text-gray-400 text-sm">{movie.Director}</p>
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-600 mb-1 font-semibold">Cast</h2>
                <p className="text-gray-400 text-sm line-clamp-2">{movie.Actors}</p>
              </div>
            </div>

            {/* Ratings */}
            {movie.Ratings?.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">Ratings</h2>
                <div className="flex flex-wrap gap-2">
                  {movie.Ratings.map((r, i) => (
                    <div key={i} className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg text-xs">
                      <span className="text-gray-500">{r.Source.replace("Internet Movie Database", "IMDb")}</span>
                      <span className="text-orange-400 font-bold ml-2">{r.Value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${
              favStatus
                ? "bg-red-600/20 border border-red-600 text-red-400 hover:bg-red-600/30"
                : "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400 hover:shadow-lg hover:shadow-red-900/40"
            }`}
          >
            {favStatus ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
