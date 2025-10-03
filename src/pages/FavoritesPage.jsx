import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "./../components/MovieCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page favorites-page p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <div className="no-favorites text-center text-gray-500">
          <p>You haven't added any favorites yet.</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 w-full max-w-6xl">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
