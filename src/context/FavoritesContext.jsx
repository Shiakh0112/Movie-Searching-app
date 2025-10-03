import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (!prev.some((item) => item.imdbID === movie.imdbID)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.imdbID === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
