import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Briefcase,
  Lock,
  ArrowRight,
  UserPlus,
  Shield,
} from "lucide-react";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Specialist Portal
        </h2>
        <p className="mt-3 text-slate-500 font-medium">
          Please enter your credentials to access the CuraID system.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block ml-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="block w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block ml-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="block w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl"
              />
            </div>
          </div>
           <label className="text-sm font-bold text-slate-700 block ml-1">
            Medical License ID or Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Briefcase className="h-5 w-5" />
            </div>
            <input
              type="text"
              required
              placeholder="e.g. 12345-MD or doctor@hospital.com"
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 block ml-1">
              Date of Birth
            </label>
            <input
              type="date"
              className="block w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 block ml-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              className="block w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-slate-700 block ml-1">
              Password
            </label>
            <a
              href="#"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all"
            >
              Forgot Password?
            </a>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Lock className="h-5 w-5" />
            </div>
            <input
              required
              placeholder="Enter your secure password"
              className="block w-full pl-11 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            ></button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`group relative w-full flex justify-center items-center py-4 px-6 border border-transparent text-lg font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] ${
            loading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              Access Dashboard
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-100"></div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 font-medium">
        <Shield className="h-3.5 w-3.5" />
        <span>Secure Connection | 2FA Required after login</span>
      </div>
    </div>
  );
};
