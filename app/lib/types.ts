import React, { JSX } from "react";

/* ===================== User ===================== */
export interface UserProfile {
  name: string;
  role: "Patient" | "Doctor" | string;
  age: number;
  gender: string;
  id: string;
  bloodType: string;
  motherBloodType: string;
  fatherBloodType: string;
  height: string;
  weight: string;
  avatar: string;
}

/* ===================== Conditions ===================== */
export interface Condition {
  name: string;
  diagnosed: string;
  doctor: string;
  status: "Managed" | "Stable" | "Critical" | string;
}

/* ===================== Medications ===================== */
export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

/* ===================== Lab Results ===================== */
export interface LabResult {
  name: string;
  date: string;
  status: "Normal" | "High" | "Low" | "Negative" | string;
  category: LabCategory;
}
/* ===================== LabCategories ===================== */

export type LabCategory =
  | "Internal Medicine" // باطنة
  | "Orthopedics" // عظام
  | "Pediatrics" // أطفال
  | "Endocrinology" // غدد صماء
  | "Nephrology" // كُلى
  | "Hematology" // دم
  | "Infectious Diseases" // أمراض معدية
  | "General"; // عام

/* ===================== Vaccinations ===================== */
export interface Vaccination {
  name: string;
  status: "completed" | "pending" | string;
}

/* ===================== Timeline ===================== */
export interface TimelineEvent {
  date: string;
  title: string;
  location: string;
  description?: string;
  type: "visit" | "prescription" | "vaccination" | "physical" | string;
}

/* ===================== Navigation ===================== */
export interface NavItem {
  name: string;
  icon: JSX.Element;
  link?: string;
  active?: boolean;
}
