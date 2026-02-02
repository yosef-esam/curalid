import React from "react";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";

export const Sidebar: React.FC = () => {
  return (
    <div className="relative w-full md:w-1/2 min-h-[#400px] md:min-h-[#600px] overflow-hidden group rounded-3xl">
      {/* Background Image with Tint */}
      <Image
        src={"/photo1.jpeg"}
        alt="photo1 "
        height={400}
        width={500}
        className=" w-full h-full absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
      />
    </div>
  );
};
