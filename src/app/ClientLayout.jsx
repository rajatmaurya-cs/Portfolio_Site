"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Pattern from "../components/Pattern";
import ScrollToTop from "../components/ScrollToTop";

export default function ClientLayout({ children }) {
  return (
    <>
      <Pattern />
      <div className="text-center pb-16">
        <Navbar />
        <ScrollToTop />
        {children}
      </div>
    </>
  );
}

