import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Navbar = () => {
  const { favorites } = useFavorites();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-red-900/30">
      {/* Top glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <span
            className="text-3xl font-bold tracking-widest"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              background: "linear-gradient(90deg, #ff4444, #ffa500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🎬 MovieHub
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 pb-1 ${
                  isActive
                    ? "text-red-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {item.name === "Favorites" && favorites.length > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                      {favorites.length}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-400 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
