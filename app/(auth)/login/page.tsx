"use client";

import React, { useState } from "react";
import { LoginForm } from "../_components/LoginForm";
import { Sidebar } from "../_components/Sidebar";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
      <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
    </div>
  );
}
