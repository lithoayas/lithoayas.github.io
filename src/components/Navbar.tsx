import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-slate-900">LithoAyas</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}