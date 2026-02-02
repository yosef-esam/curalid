
import React from 'react';

interface PortalCardProps {
  children: React.ReactNode;
}

export const PortalCard: React.FC<PortalCardProps> = ({ children }) => {
  return (
    <div className="max-w-[#1000px] w-full bg-white rounded-[#32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out">
      {children}
    </div>
  );
};
