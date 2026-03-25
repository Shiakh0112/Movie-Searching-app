import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "./../components/MovieCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1
          className="text-5xl font-bold tracking-widest mb-2"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            background: "linear-gradient(90deg, #ff4444, #ffa500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ❤️ Your Favorites
        </h1>
        <p className="text-gray-600 text-sm">
          {favorites.length} movie{favorites.length !== 1 ? "s" : ""} saved
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p className="text-7xl mb-6">🎬</p>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">No favorites yet</h2>
          <p className="text-gray-700 text-sm">
            Browse movies and hit the heart to save them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
