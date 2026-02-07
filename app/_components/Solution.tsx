import React from "react";
import { CheckCircle2 } from "lucide-react";

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <img
                src="aa.jpeg"
                alt="Doctor with tablet"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[#400px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 mt-12 lg:mt-0">
            <p className="text-[#0066FF] font-bold tracking-widest text-xs uppercase mb-4">
              The Solution
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Smart Identity. <br />
              Universal Access.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              CuraID creates a unified digital passport for your health. Using
              secure QR codes and NFC technology, first responders can instantly
              access life-saving data like allergies and blood type, while you
              maintain complete control over who sees your full history.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Centralized Data",
                  desc: "Allergies, prescriptions, and history in one secure profile.",
                },
                {
                  title: "Instant Sharing",
                  desc: "One-scan access for doctors in emergencies.",
                },
                {
                  title: "Privacy First",
                  desc: "You decide what data to share and for how long.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0066FF] mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
