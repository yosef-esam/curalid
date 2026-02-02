import React from "react";
import { Pill } from "lucide-react";
import { MEDICATIONS } from "@/app/lib/constants";
import { MedicationGrid } from "../_components/SummaryCards";



const MedicationsPage = () => {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">
          All Medications
        </h1>

      <MedicationGrid number={MEDICATIONS.length}/>
      </div>
    </main>
  );
};

export default MedicationsPage;
