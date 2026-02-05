import React from "react";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  FlaskConical,
  Pill,
  Settings,
  HelpCircle,
  Copy,
  Printer,
  Plus,
  Bell,
  Search,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  Condition,
  Medication,
  LabResult,
  TimelineEvent,
  UserProfile,
} from "./types";

export const USER_DATA: UserProfile = {
  name: "hanan khalil",
  role: "Patient",
  age: 34,
  gender: "Female",
  id: "CURA-8829-102",
  bloodType: "O+",
  motherBloodType: "A+",
  fatherBloodType: "O-",
  height: "170 cm",
  weight: "65 kg",
  avatar: "/profile.png",
};

export const CONDITIONS: Condition[] = [
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
];

export const MEDICATIONS: Medication[] = [
  { name: "Lisinopril", dosage: "10mg", frequency: "Daily" },
  { name: "Albuterol Inhaler", dosage: "90mcg", frequency: "As needed" },
  { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
  { name: "Atorvastatin", dosage: "20mg", frequency: "Daily" },
  { name: "Losartan", dosage: "50mg", frequency: "Daily" },
  { name: "Levothyroxine", dosage: "100mcg", frequency: "Daily (before food)" },
  { name: "Amoxicillin", dosage: "500mg", frequency: "Three times daily" },
  { name: "Ibuprofen", dosage: "400mg", frequency: "Every 8 hours as needed" },
  { name: "Aspirin", dosage: "81mg", frequency: "Daily" },
  { name: "Vitamin D3", dosage: "2000 IU", frequency: "Daily" },
  { name: "Insulin Glargine", dosage: "10 units", frequency: "Nightly" },
  { name: "Omeprazole", dosage: "20mg", frequency: "Daily (AM)" },
  { name: "Cetirizine", dosage: "10mg", frequency: "Daily" },
  { name: "Montelukast", dosage: "10mg", frequency: "Nightly" },
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Every 6 hours as needed",
  },
];

export const LAB_RESULTS: LabResult[] = [
  {
    name: "Lipid Panel",
    date: "Oct 12, 2023",
    status: "Normal",
    category: "Internal Medicine", // باطنة
  },
  {
    name: "Blood Glucose",
    date: "Oct 12, 2023",
    status: "High",
    category: "Endocrinology", // غدد
  },
  {
    name: "Hemoglobin",
    date: "Oct 12, 2023",
    status: "Normal",
    category: "Hematology", // دم
  },
  {
    name: "HbA1c",
    date: "Sep 28, 2023",
    status: "High",
    category: "Endocrinology",
  },
  {
    name: "Kidney Function (eGFR)",
    date: "Sep 28, 2023",
    status: "Normal",
    category: "Nephrology", // كُلى
  },
  {
    name: "Liver Enzymes (ALT/AST)",
    date: "Aug 19, 2023",
    status: "Normal",
    category: "Internal Medicine", // باطنة
  },
  {
    name: "Thyroid Panel (TSH/T3/T4)",
    date: "Aug 19, 2023",
    status: "High",
    category: "Endocrinology",
  },
  {
    name: "CBC (Complete Blood Count)",
    date: "Jul 02, 2023",
    status: "Normal",
    category: "Hematology",
  },
  {
    name: "Vitamin D Level",
    date: "Jun 15, 2023",
    status: "Low",
    category: "Orthopedics", // عظام
  },
  {
    name: "Electrolyte Panel",
    date: "Jun 15, 2023",
    status: "Normal",
    category: "Internal Medicine",
  },
  {
    name: "Urinalysis",
    date: "May 11, 2023",
    status: "Normal",
    category: "Nephrology",
  },
  {
    name: "CRP (Inflammation Marker)",
    date: "May 11, 2023",
    status: "High",
    category: "Internal Medicine",
  },
  {
    name: "Iron & Ferritin",
    date: "Apr 01, 2023",
    status: "Low",
    category: "Hematology",
  },
  {
    name: "A1 Serum Protein",
    date: "Apr 01, 2023",
    status: "Normal",
    category: "General",
  },
  {
    name: "COVID-19 PCR",
    date: "Mar 20, 2023",
    status: "Negative",
    category: "Infectious Diseases", // أمراض معدية
  },
  {
    name: "Pediatric Growth Hormone Test",
    date: "Mar 10, 2023",
    status: "Normal",
    category: "Pediatrics", // أطفال
  },
];


export const VACCINATIONS = [
  { name: "Flu Shot (2023)", status: "completed" },
  { name: "COVID-19 Booster", status: "completed" },
  { name: "Tetanus", status: "completed" },
];

export const TIMELINE: TimelineEvent[] = [
  {
    date: "Oct 24, 2023",
    title: "Cardiology Visit",
    location: "Dr. Emily Smith",
    description: "Routine checkup. BP slightly elevated.",
    type: "visit",
  },
  {
    date: "Oct 10, 2023",
    title: "Prescription Refill",
    location: "CVS Pharmacy",
    type: "prescription",
  },
  {
    date: "Sept 15, 2023",
    title: "Flu Vaccination",
    location: "City Health Clinic",
    type: "vaccination",
  },
  {
    date: "Aug 02, 2023",
    title: "Annual Physical",
    location: "Dr. Jonathan Lee",
    type: "physical",
  },
];

export const NAV_ITEMS = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    active: true,
    link: "dashboard",
  },
  {
    name: "Lab Results",
    icon: <FlaskConical size={20} />,
    link: "dashboard/labresults",
  },
  {
    name: "Medications",
    icon: <Pill size={20} />,
    link: "dashboard/medications",
  },
];

export const BOTTOM_NAV = [
  { name: "Settings", icon: <Settings size={20} /> },
  { name: "Help Center", icon: <HelpCircle size={20} /> },
];
