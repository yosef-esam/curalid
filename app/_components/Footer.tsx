import React from "react";
import { Twitter, Instagram, Linkedin, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
               <Link href={'/'} className="flex items-center space-x-2">
            <Image
              src={"/logo.jpeg"}
              width={70}
              height={50}
              alt="logo"
              className=" rounded-2xl"
            ></Image>
          </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-[#240px]">
              The secure standard for medical identity. Protecting your data
              while saving lives in emergencies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  For Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  For Clinics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs font-medium">
          <p className="mb-4 md:mb-0">
            &copy; 2024 CuraID Systems Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-gray-50 rounded border border-gray-100 uppercase tracking-tighter">
              HIPAA
            </span>
            <span className="px-3 py-1 bg-gray-50 rounded border border-gray-100 uppercase tracking-tighter">
              SOC2
            </span>
            <span className="px-3 py-1 bg-gray-50 rounded border border-gray-100 uppercase tracking-tighter">
              GDPR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
