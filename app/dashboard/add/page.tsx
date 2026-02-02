"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

/* ===================== Types ===================== */

type Condition = {
  name: string;
  diagnosed: string;
  doctor: string;
  status: string;
};

type Medication = {
  name: string;
  dosage: string;
  frequency: string;
};

type LabResult = {
  name: string;
  date: string;
  status: string;
};

type Vaccination = {
  name: string;
  status: string;
};

/* ===================== Component ===================== */

export default function MedicalFormPage() {
  const [conditions, setConditions] = useState<Condition[]>([
    {
      name: "Essential Hypertension",
      diagnosed: "Oct 2021",
      doctor: "Dr. Smith",
      status: "Managed",
    },
    {
      name: "Mild Asthma",
      diagnosed: "Feb 2018",
      doctor: "Dr. Roberts",
      status: "Stable",
    },
  ]);

  const [medications, setMedications] = useState<Medication[]>([
    { name: "Lisinopril", dosage: "10mg", frequency: "Daily" },
    { name: "Albuterol Inhaler", dosage: "90mcg", frequency: "As needed" },
  ]);

  const [labs, setLabs] = useState<LabResult[]>([
    { name: "Lipid Panel", date: "Oct 12, 2023", status: "Normal" },
    { name: "Blood Glucose", date: "Oct 12, 2023", status: "High" },
    { name: "Hemoglobin", date: "Oct 12, 2023", status: "Normal" },
  ]);

  const [vaccinations, setVaccinations] = useState<Vaccination[]>([
    { name: "Flu Shot (2023)", status: "Completed" },
    { name: "COVID-19 Booster", status: "Completed" },
    { name: "Tetanus", status: "Completed" },
  ]);

  /* ===================== Save ===================== */

  const handleSave = async () => {
    try {
      const res = await fetch("/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId: "PAT-0001",
          conditions,
          medications,
          labs,
          vaccinations,
        }),
      });

      if (!res.ok) throw new Error();

      alert("Medical information saved successfully");
    } catch {
      alert("Failed to save medical information");
    }
  };

  /* ===================== UI ===================== */

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-white">
      <h1 className="text-2xl font-bold text-slate-900">
        Medical Information Form
      </h1>

      {/* Medical Conditions */}
      <Section title="Medical Conditions">
        {conditions.map((c, i) => (
          <Row key={i}>
            <Input
              value={c.name}
              onChange={(e: any) => {
                const copy = [...conditions];
                copy[i].name = e.target.value;
                setConditions(copy);
              }}
            />
            <Input
              value={c.diagnosed}
              onChange={(e: any) => {
                const copy = [...conditions];
                copy[i].diagnosed = e.target.value;
                setConditions(copy);
              }}
            />
            <Input
              value={c.doctor}
              onChange={(e: any) => {
                const copy = [...conditions];
                copy[i].doctor = e.target.value;
                setConditions(copy);
              }}
            />
            <Select
              value={c.status}
              options={["Managed", "Stable", "Critical"]}
              onChange={(e: any) => {
                const copy = [...conditions];
                copy[i].status = e.target.value;
                setConditions(copy);
              }}
            />
          </Row>
        ))}
        <AddButton
          onClick={() =>
            setConditions([
              ...conditions,
              { name: "", diagnosed: "", doctor: "", status: "" },
            ])
          }
        />
      </Section>

      {/* Medications */}
      <Section title="Medications">
        {medications.map((m, i) => (
          <Row key={i}>
            <Input
              value={m.name}
              onChange={(e: any) => {
                const copy = [...medications];
                copy[i].name = e.target.value;
                setMedications(copy);
              }}
            />
            <Input
              value={m.dosage}
              onChange={(e: any) => {
                const copy = [...medications];
                copy[i].dosage = e.target.value;
                setMedications(copy);
              }}
            />
            <Input
              value={m.frequency}
              onChange={(e: any) => {
                const copy = [...medications];
                copy[i].frequency = e.target.value;
                setMedications(copy);
              }}
            />
          </Row>
        ))}
        <AddButton
          onClick={() =>
            setMedications([...medications, { name: "", dosage: "", frequency: "" }])
          }
        />
      </Section>

      {/* Lab Results */}
      <Section title="Lab Results">
        {labs.map((l, i) => (
          <Row key={i}>
            <Input
              value={l.name}
              onChange={(e: any) => {
                const copy = [...labs];
                copy[i].name = e.target.value;
                setLabs(copy);
              }}
            />
            <Input
              value={l.date}
              onChange={(e: any) => {
                const copy = [...labs];
                copy[i].date = e.target.value;
                setLabs(copy);
              }}
            />
            <Select
              value={l.status}
              options={["Normal", "High", "Low"]}
              onChange={(e: any) => {
                const copy = [...labs];
                copy[i].status = e.target.value;
                setLabs(copy);
              }}
            />
          </Row>
        ))}
        <AddButton
          onClick={() => setLabs([...labs, { name: "", date: "", status: "" }])}
        />
      </Section>

      {/* Vaccinations */}
      <Section title="Vaccinations">
        {vaccinations.map((v, i) => (
          <Row key={i}>
            <Input
              value={v.name}
              onChange={(e: any) => {
                const copy = [...vaccinations];
                copy[i].name = e.target.value;
                setVaccinations(copy);
              }}
            />
            <Select
              value={v.status}
              options={["Completed", "Pending"]}
              onChange={(e: any) => {
                const copy = [...vaccinations];
                copy[i].status = e.target.value;
                setVaccinations(copy);
              }}
            />
          </Row>
        ))}
        <AddButton
          onClick={() =>
            setVaccinations([...vaccinations, { name: "", status: "" }])
          }
        />
      </Section>

      <div className="flex justify-end gap-3">
        <button className="px-5 py-2 rounded-xl border border-slate-200 text-sm font-semibold">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
        >
          Save Medical Information
        </button>
      </div>
    </div>
  );
}

/* ===================== Reusable UI ===================== */

const Section = ({ title, children }: any) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
    <h2 className="font-bold text-slate-900">{title}</h2>
    {children}
  </div>
);

const Row = ({ children }: any) => (
  <div className="grid grid-cols-4 gap-3">{children}</div>
);

const Input = (props: any) => (
  <input
    {...props}
    className="w-full rounded-xl border text-black border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
  />
);

const Select = ({ value, options, onChange }: any) => (
  <select
    value={value}
    onChange={onChange}
    className="w-full rounded-xl text-black border border-slate-200 px-3 py-2 text-sm"
  >
    {options.map((o: string) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

const AddButton = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
  >
    <Plus size={16} /> Add new
  </button>
);
