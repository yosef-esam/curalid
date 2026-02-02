import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1]">
              Your Medical History, <br />
              <span className="text-[#0066FF]">Secure & Accessible</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              One Identity. Complete Care. Instantly share vital medical data
              with doctors in emergencies. CuraID consolidates your allergies,
              prescriptions, and history into one secure, scannable profile.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0066FF] text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
                Create Medical ID
              </button>
              <button className="bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
                Provider Portal
              </button>
            </div>

            <div className="mt-8 flex items-center space-x-6 text-sm font-medium text-gray-400">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-green-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-blue-500" />
                <span>End-to-End Encryption</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[#500px]">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-25"></div>
              <img
                src="photo1.jpeg"
                alt="Digital Medical ID Interface"
                className="relative rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
