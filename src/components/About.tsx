import React from 'react';

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About LithoAyas</h2>
        <div className="prose prose-lg">
          <p className="text-gray-600">
            Founded in 2024, LithoAyas has emerged as a pioneering force in geological analysis and mineral detection. Our state-of-the-art laboratory, equipped with advanced spectrometry and AI-powered analysis tools, enables us to provide unparalleled accuracy in resource identification and characterization. With a team of experienced geologists and data scientists, we've successfully analyzed over 10,000 samples for mining companies, environmental agencies, and research institutions worldwide. Our commitment to innovation and precision has made us a trusted partner in the mining and environmental sectors.
          </p>
        </div>
      </div>
    </div>
  );
}