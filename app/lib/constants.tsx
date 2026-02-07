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
  name: "Khadija Mohamed",
  role: "Patient",
  age: 1.5,
  gender: "female",
  id: "CURA-3453-8653",
  bloodType: "b+",
  motherBloodType: "o-",
  fatherBloodType: "AB+",
  height: "170 cm",
  weight: "80 kg",
  avatar: "/bb.jpeg",
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

export const MEDICATIONS: Medication[] = [];

export const LAB_RESULTS: LabResult[] = [];

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
