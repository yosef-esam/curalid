import React from "react";
import { Sidebar } from "./_components/Sidebar";

export default function AuthLayout({ children }:{children: React.ReactNode;}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 md:p-8">
      <div className="max-w-[#1000px] w-full bg-white rounded-[#32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Panel */}
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
