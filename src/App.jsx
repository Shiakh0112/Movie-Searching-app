import React from "react";
import { Routes, Route } from "react-router-dom";
// import { FavoritesProvider } from "./context/FavoritesContext";
// import Navbar from "./components/Navbar";
// import TVPage from "./pages/TVPage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailPage from "./pages/MovieDetailPage";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} /> {/* ✅ */}
            <Route path="/favorites" element={<FavoritesPage />} /> {/* ✅ */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
