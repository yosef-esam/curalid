
import React from 'react';
import { Search, Bell } from 'lucide-react';
import { USER_DATA } from '../../lib/constants';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="flex-1 max-w-2xl relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search records, doctors, or symptoms..."
          className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-6 ml-4">
        <button className="relative text-slate-500 hover:text-slate-900 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{USER_DATA.name}</p>
            <p className="text-xs text-slate-500">{USER_DATA.role}</p>
          </div>
          <Image
            src={USER_DATA.avatar}
            alt="Profile"
            width={50}
            height={50}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
