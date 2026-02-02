
import React from 'react';
import { NAV_ITEMS, BOTTOM_NAV } from '../../lib/constants';
import { Stethoscope } from 'lucide-react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <Stethoscope size={24} />
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">CuraID</span>
      </div>

      <nav className="flex-1 px-4 mt-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link href={item.link}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-6 border-t border-slate-100">
        <ul className="space-y-1">
          {BOTTOM_NAV.map((item) => (
            <li key={item.name}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
