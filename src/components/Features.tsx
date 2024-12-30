import React from 'react';
import { TestTube2, Database, LineChart, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: TestTube2,
    title: "Advanced Sample Analysis",
    description: "State-of-the-art soil and water testing for precise mineral detection"
  },
  {
    icon: Database,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms for accurate data interpretation"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Future-focused insights for informed decision making"
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Decades of combined experience in energy sector analysis"
  },
  {
    icon: Clock,
    title: "Rapid Results",
    description: "Quick turnaround times without compromising accuracy"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO certified processes and rigorous quality controls"
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Capabilities
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions powered by cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}