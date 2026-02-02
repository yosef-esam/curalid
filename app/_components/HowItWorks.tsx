
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Create Account",
      desc: "Sign up and verify your identity securely using government-issued ID."
    },
    {
      num: 2,
      title: "Connect Records",
      desc: "Sync with your existing clinics or manually upload prescriptions and allergies."
    },
    {
      num: 3,
      title: "Get Your CuraID",
      desc: "Receive your unique QR code and digital medical card instantly."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            How CuraID Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Secure your health in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-10"></div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0066FF] text-[#0066FF] flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-blue-50">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
