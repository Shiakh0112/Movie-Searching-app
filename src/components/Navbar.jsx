import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useState } from "react";

const Navbar = () => {
  const { favorites } = useFavorites();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-red-600 tracking-wider">
          MovieHub
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative px-2 py-1 font-medium transition-all duration-200 ${
                isActive
                  ? "text-red-500 after:w-full"
                  : "text-gray-300 hover:text-white"
              } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-red-500 after:w-0 after:transition-all after:duration-200 flex items-center`
            }
          >
            {item.name}
            {/* ✅ Add count badge only for Favorites */}
            {item.name === "Favorites" && favorites.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {favorites?.length || 0}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
