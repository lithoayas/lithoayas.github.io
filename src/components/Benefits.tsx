import React from 'react';

export default function Benefits() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Leading the industry with innovative solutions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Geological Analysis Map"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span>High Probability</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>Medium Probability</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 border-2 border-dashed border-gray-400 rounded-full w-4 h-4 mr-2"></div>
                <span>Uncertainty Region</span>
              </div>
            </div>
          </div>
          <div className="space-y-8 my-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Data-Driven Decision Making
              </h3>
              <p className="text-gray-600">
                Our AI/ML capabilities transform raw data into actionable insights, combining satellite imagery, ground sensors, and historical data to predict mineral deposits with unprecedented accuracy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprehensive Analysis
              </h3>
              <p className="text-gray-600">
                We integrate multiple data sources including spectral analysis, geophysical surveys, and real-time sensor networks to create a complete picture of resource potential with clearly defined confidence intervals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Predictive Intelligence
              </h3>
              <p className="text-gray-600">
                Our advanced algorithms process terabytes of geological data to identify promising locations, while quantifying uncertainty to help you make informed investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}