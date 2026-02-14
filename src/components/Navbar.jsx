import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const navLinks = ['Home', 'About', 'Services', 'Events', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-white" size={20} />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.25em]">
                Platform
              </p>

              {/* 👇 Heading Font Applied */}
              <p className="font-heading text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                Incredible
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-indigo-600 transition relative group text-sm"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden lg:block px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-indigo-50 rounded transition font-medium text-sm"
              >
                {link}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded font-medium text-sm mt-2">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
