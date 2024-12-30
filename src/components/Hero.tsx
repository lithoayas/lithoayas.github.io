import React from 'react';
import { TestTube2, Database, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlock Earth's Potential with Advanced Analytics
            </h1>
            <p className="text-xl text-slate-300">
              Transforming soil and water analysis with cutting-edge AI technology for precise mineral detection and predictive insights.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started Today
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80"
              alt="Laboratory Analysis"
              className="rounded-lg shadow-lg col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}