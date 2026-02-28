import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/about" },
    { name: "Progress", path: "/progress" },
  ];
  const lastUpdate = "28th Feb 2026"
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A3D9D3] to-blue-200 flex items-center justify-center shadow-sm relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-white/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
            LUMA
          </span>
        </Link>

        {/* Always Visible Last Update */}
        {/* <span className="text-[10px] sm:text-xs text-gray-400 absolute left-1/2 -translate-x-1/2">
          Last Update : {lastUpdate}
        </span> */}

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  location.pathname === link.path
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A3D9D3] rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <span className="text-xs text-gray-400 border-l pl-4">
            Last Update : {lastUpdate}
          </span>
        </div>

        {/* Mobile Right Section */}
        <div className="md:hidden flex items-center gap-3">
          <span className="text-[11px] text-gray-400 whitespace-nowrap">
            Last Update : {lastUpdate}
          </span>

          <button 
            className="p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === link.path
                  ? "text-[#A3D9D3]"
                  : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
