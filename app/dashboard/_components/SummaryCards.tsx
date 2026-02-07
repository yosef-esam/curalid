"use client";

import React, { useEffect, useState } from "react";
import {
  Pill,
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  Copy,
} from "lucide-react";
import {
  USER_DATA,
  CONDITIONS,
  MEDICATIONS,
  LAB_RESULTS,
  VACCINATIONS,
} from "../../lib/constants";
import Image from "next/image";
import Link from "next/link";

/* ===================== Profile Card ===================== */

export const ProfileCard: React.FC = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
    <div className="relative mb-4">
      <Image
        src={USER_DATA.avatar}
        alt={USER_DATA.name}
        width={96}
        height={96}
        className="rounded-full object-cover"
      />
      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
    </div>

    <h2 className="text-xl font-bold text-slate-900">{USER_DATA.name}</h2>
    <p className="text-slate-500 text-sm mb-6">
      {USER_DATA.gender}, {USER_DATA.age} yrs
    </p>
    <p className="text-slate-500 text-3xl mb-6">DNA</p>
    <img src="/dna.png" alt="" className=" rounded-2xl" />

    <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
        CuraID Number
      </p>
      <div className="flex items-center justify-between">
        <span className="text-blue-900 font-mono font-bold tracking-widest">
          {USER_DATA.id}
        </span>
        <button className="text-slate-400 hover:text-slate-600">
          <Copy size={16} />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-3 w-full gap-2 text-center">
      <div>
        <p className="text-sm font-bold text-slate-900">
          {USER_DATA.bloodType}
        </p>
        <p className="text-[10px] text-slate-400 uppercase font-medium">
          Blood
        </p>
      </div>
      <div className="border-x border-slate-100">
        <p className="text-sm font-bold text-slate-900">
          {USER_DATA.motherBloodType}
        </p>
        <p className="text-[10px] text-slate-400 uppercase font-medium">
          Mother Blood
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-slate-900">
          {USER_DATA.fatherBloodType}
        </p>
        <p className="text-[10px] text-slate-400 uppercase font-medium">
          Father Blood
        </p>
      </div>
    </div>
  </div>
);

/* ===================== Active Conditions ===================== */

export const ActiveConditions: React.FC = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
          <AlertCircle size={18} />
        </div>
        <h3 className="font-bold text-slate-900">Active Conditions</h3>
      </div>
      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
        {CONDITIONS.length}
      </span>
    </div>

    <div className="space-y-4">
      {CONDITIONS.map((c, i) => (
        <div
          key={i}
          className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <div>
            <h4 className="text-sm font-semibold text-slate-900">{c.name}</h4>
            <p className="text-xs text-slate-500">
              Diagnosed: {c.diagnosed} • {c.doctor}
            </p>
          </div>
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
              c.status === "Managed"
                ? "bg-orange-50 text-orange-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {c.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ===================== Medications ===================== */

export const MedicationGrid = ({ number }: { number?: number }) => {
  const shown = number ? MEDICATIONS.slice(0, number) : MEDICATIONS;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
            <Pill size={18} />
          </div>
          <h3 className="font-bold text-slate-900">Medications</h3>
        </div>
        <Link
          href="/dashboard/medications"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3 flex-1">
        {shown.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:border-slate-200 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              <Pill size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">{m.name}</h4>
              <p className="text-xs text-slate-500">
                {m.dosage} • {m.frequency}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===================== Lab Results ===================== */

export const LabResults = ({ number }: { number?: number }) => {
  const shown = number ? LAB_RESULTS.slice(0, number) : LAB_RESULTS;

  // group by category
  const groupedResults = shown.reduce(
    (acc, lab) => {
      if (!acc[lab.category]) {
        acc[lab.category] = [];
      }
      acc[lab.category].push(lab);
      return acc;
    },
    {} as Record<string, typeof LAB_RESULTS>,
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
            <FlaskConical size={18} />
          </div>
          <h3 className="font-bold text-slate-900">Lab Results</h3>
        </div>
        <Link
          href="/dashboard/labresults"
          className="text-xs font-semibold text-green-600 hover:text-green-700"
        >
          View All
        </Link>
      </div>

      {/* Categories */}
      <div className="space-y-6 flex-1">
        {Object.entries(groupedResults).map(([category, labs]) => (
          <div key={category} className="space-y-3">
            {/* Category title */}
            <div className="flex items-center gap-3 mt-2">
              <span className="h-6 w-1 rounded-full bg-indigo-500" />

              <h4 className="text-sm font-semibold text-slate-700 tracking-wide">
                {category}
              </h4>

              <span className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Labs */}
            {labs.map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50"
              >
                <div>
                  <h5 className="text-sm font-semibold text-slate-900">
                    {l.name}
                  </h5>
                  <p className="text-[10px] text-slate-500">{l.date}</p>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    l.status === "Normal"
                      ? "bg-green-50 text-green-600"
                      : l.status === "High"
                        ? "bg-red-50 text-red-600"
                        : l.status === "Low"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {l.status}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===================== Vaccinations ===================== */

export const Vaccinations: React.FC = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center">
        <CheckCircle2 size={18} />
      </div>
      <h3 className="font-bold text-slate-900">Vaccinations</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {VACCINATIONS.map((v, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full"
        >
          <CheckCircle2 size={14} className="text-teal-500" />
          <span className="text-xs font-medium text-slate-700">{v.name}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ===================== QR Card (FIXED) ===================== */

export const QRCard: React.FC = () => {
  const [pattern, setPattern] = useState<boolean[]>([]);

  useEffect(() => {
    setPattern(Array.from({ length: 16 }, () => Math.random() > 0.5));
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-900">Quick Access</h3>
        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
          Private
        </span>
      </div>

      <div className="aspect-square bg-slate-900 rounded-2xl mb-4 p-4 flex items-center justify-center">
        <div className="w-full h-full border-4 border-white border-dashed rounded-lg flex items-center justify-center opacity-80">
          <div className="grid grid-cols-4 gap-1">
            {pattern.map((active, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-sm ${
                  active ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 leading-relaxed">
        Scan to share medical profile with doctor securely.
      </p>
    </div>
  );
};
