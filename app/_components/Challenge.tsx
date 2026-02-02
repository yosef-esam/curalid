
import React from 'react';
import { FileWarning, Clock, AlertTriangle } from 'lucide-react';

const Challenge: React.FC = () => {
  const challenges = [
    {
      icon: <FileWarning className="w-6 h-6 text-red-500" />,
      title: "Lost Records",
      desc: "Critical info is missing when you switch clinics or providers, forcing you to fill out endless forms.",
      color: "bg-red-50"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Delayed Treatment",
      desc: "Doctors waste precious time tracking down your past files instead of treating you immediately.",
      color: "bg-orange-50"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-blue-500" />,
      title: "Fragmented History",
      desc: "No single source of truth for your health journey means potential for conflicting prescriptions.",
      color: "bg-blue-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0066FF] font-bold tracking-widest text-xs uppercase mb-4">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Is your medical history scattered?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Current healthcare systems often leave patient data siloed, leading to delays and errors when you switch clinics or face an emergency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`${c.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;
