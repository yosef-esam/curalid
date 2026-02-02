
import React from 'react';
import { User, Stethoscope, Plus } from 'lucide-react';

const Everyone: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Designed for Everyone
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you are receiving care or providing it, CuraID makes the process seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Patients Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#0066FF]"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <User className="text-[#0066FF] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Patients</h3>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                "Peace of mind during travel or emergencies.",
                "No more filling out clipboard forms repeatedly.",
                "Full ownership of your own health data."
              ].map((text, i) => (
                <li key={i} className="flex items-center text-gray-600 font-medium">
                  <Plus className="w-4 h-4 text-[#0066FF] mr-3" />
                  {text}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-blue-50 text-[#0066FF] font-bold hover:bg-blue-100 transition-colors">
              Get Your Free ID
            </button>
          </div>

          {/* Providers Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#10B981]"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Stethoscope className="text-[#10B981] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Providers</h3>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                "Instant access to critical history and allergies.",
                "Reduce administrative overhead and data entry.",
                "Minimize errors from missing patient information."
              ].map((text, i) => (
                <li key={i} className="flex items-center text-gray-600 font-medium">
                  <Plus className="w-4 h-4 text-[#10B981] mr-3" />
                  {text}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-gray-100 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors shadow-sm">
              Provider Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Everyone;
