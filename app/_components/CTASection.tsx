
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0066FF] rounded-[40px] py-20 px-8 md:px-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to secure your health?
            </h2>
            <p className="text-blue-100 text-lg mb-12">
              Join thousands of patients and doctors who trust CuraID for faster, safer healthcare.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#0066FF] font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-600/50 text-white font-extrabold rounded-xl border border-blue-400 hover:bg-blue-600/70 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
