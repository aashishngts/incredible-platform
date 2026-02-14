import React from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const navLinks = ["Home", "About", "Services", "Events", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-white" size={20} />
            </div>

            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.25em]">
                Platform
              </p>

              <p className="font-heading text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                Incredible
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 font-semibold text-[15px] hover:text-indigo-600 transition relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-[15px] font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 pt-3 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2.5 text-[15px] font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
              >
                {link}
              </a>
            ))}

            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-[15px] mt-2 shadow-md hover:shadow-lg transition">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
