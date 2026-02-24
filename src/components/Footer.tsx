import { Link } from "react-router-dom";
import { Twitter, Instagram, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#A3D9D3] to-blue-200 shadow-sm" />
            <span className="font-display font-bold text-lg tracking-tight text-gray-900">
              LUMA
            </span>
          </div>
          <p className="text-sm text-gray-500">
            A Companion That Feels Alive.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A3D9D3] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://www.instagram.com/luma.module/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A3D9D3] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A3D9D3] transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:lumamodule@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A3D9D3] transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-gray-400 flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} LUMA Inc.</span>
          <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
