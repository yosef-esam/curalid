"use client";

import React, { useState } from "react";

import { RegisterForm } from "../_components/RegisterForm";

export default function RegisterPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
      <RegisterForm onLoginSuccess={() => setIsLoggedIn(true)} />
    </div>
  );
}
