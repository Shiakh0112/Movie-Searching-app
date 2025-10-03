import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const MovieDetail = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favStatus = isFavorite(movie.imdbID);

  const handleFavoriteClick = () => {
    if (favStatus) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden my-8">
      {/* Poster */}
      <div className="md:w-1/3 relative">
        {movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-lg">
            No Poster
          </div>
        )}
      </div>

      {/* Details */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            {movie.Title}{" "}
            <span className="text-gray-500 text-xl">({movie.Year})</span>
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {movie.Rated}
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {movie.Runtime}
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {movie.Genre}
            </span>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-gray-700 mb-1">Plot</h2>
            <p className="text-gray-600">{movie.Plot}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-gray-700 mb-1">Cast</h2>
            <p className="text-gray-600">{movie.Actors}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-gray-700 mb-1">Director</h2>
            <p className="text-gray-600">{movie.Director}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-gray-700 mb-1">Ratings</h2>
            <div className="flex flex-wrap gap-3">
              {movie.Ratings?.map((rating, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {rating.Source}: {rating.Value}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 ${
            favStatus
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {favStatus ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
