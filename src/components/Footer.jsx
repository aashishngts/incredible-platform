import React from 'react';
import { Sparkles, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
              <Sparkles className="text-indigo-500" size={20} />
              Incredible
            </h3>
            <p className="text-xs leading-relaxed">
              Building digital ecosystems for creators worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#events" className="hover:text-white transition">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Follow</h4>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition transform hover:scale-110 duration-300"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p>&copy; 2024 Incredible Platform. All rights reserved. ✨</p>
        </div>
      </div>
    </footer>
  );
}