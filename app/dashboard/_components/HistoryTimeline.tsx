
import React from 'react';
import { TIMELINE } from '../../lib/constants';

const HistoryTimeline: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
      <h3 className="font-bold text-slate-900 mb-8">Medical History</h3>
      
      <div className="relative flex-1 space-y-8 before:absolute before:left-[#11px] before:top-2 before:bottom-2 before:w-[#2px] before:bg-slate-100">
        {TIMELINE.map((event, i) => (
          <div key={i} className="relative pl-8 group">
            <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${
              event.type === 'visit' ? 'bg-blue-500' :
              event.type === 'prescription' ? 'bg-indigo-400' :
              event.type === 'vaccination' ? 'bg-teal-400' : 'bg-slate-400'
            }`}>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{event.date}</span>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{event.title}</h4>
              <p className="text-xs text-slate-500">{event.location}</p>
              {event.description && (
                <div className="mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-600 leading-relaxed italic">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-3 px-4 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
        View Full History
      </button>
    </div>
  );
};

export default HistoryTimeline;
