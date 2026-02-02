"use client";
import React, { useState, useEffect } from "react";
import { Printer, Plus, Sparkles, BrainCircuit } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import HistoryTimeline from "./_components/HistoryTimeline";
import {
  ProfileCard,
  ActiveConditions,
  MedicationGrid,
  LabResults,
  Vaccinations,
  QRCard,
} from "./_components/SummaryCards";
import { USER_DATA, LAB_RESULTS, CONDITIONS } from "../lib/constants";
import Link from "next/link";

const DashboardPage: React.FC = () => {
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  

  useEffect(() => {
    // Optionally fetch initial AI summary
    // fetchAiInsight();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-64">
        <Header />

        <main className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="max-w-[#1400px] mx-auto">
            {/* Action Bar */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">
                  Overview
                </h1>
                <p className="text-slate-500 font-medium">
                  Here is your daily health summary.
                </p>
              </div>
              <div className="flex gap-3">
           
                <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                  <Printer size={18} />
                  Print Summary
                </button>
                <Link href={"dashboard/add"} className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
                  <Plus size={18} />
                  Add Record
                </Link>
              </div>
            </div>

         

            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Profile & QR */}
              <div className="col-span-12 lg:col-span-3 space-y-6">
                <ProfileCard />
                <QRCard />
              </div>

              <div className="col-span-12 lg:col-span-6 space-y-6">
                <ActiveConditions />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MedicationGrid number={2} />
                  <LabResults number={2} />
                </div>

                <Vaccinations />
              </div>

              {/* Right Column - Timeline */}
              <div className="col-span-12 lg:col-span-3">
                <HistoryTimeline />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
