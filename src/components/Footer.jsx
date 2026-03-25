import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-red-900/30 overflow-hidden">
      {/* Glow top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h2
              className="text-4xl font-bold mb-3 tracking-widest"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                background: "linear-gradient(90deg, #ff4444, #ffa500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🎬 MovieHub
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your ultimate destination for discovering movies, TV series, and
              all things cinema. Powered by OMDb API.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs text-red-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Search", path: "/search" },
                { name: "Favorites", path: "/favorites" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-red-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-red-500 transition-all duration-300 inline-block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs text-red-400">
              About
            </h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>🎥 Powered by OMDb API</li>
              <li>⚡ Built with React + Vite</li>
              <li>🎨 Styled with Tailwind CSS</li>
              <li>❤️ Made with passion for cinema</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} MovieHub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with
            <span className="text-red-500 animate-pulse mx-1">♥</span>
            for movie lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
