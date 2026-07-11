"use client";

import React, { useState, useEffect } from "react";
import Preloader from "../components/Pre";
import Navbar from "../components/Navbar";
import Pattern from "../components/Pattern";
import ScrollToTop from "../components/ScrollToTop";

export default function ClientLayout({ children }) {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Pattern />
      <Preloader load={load} />
      
      <div 
        className={load 
          ? "h-screen overflow-hidden opacity-0 pointer-events-none text-center pb-16 transition-opacity duration-300" 
          : "text-center pb-16 opacity-100 transition-opacity duration-700"
        }
      >
        <Navbar />
        <ScrollToTop />
        {children}
      </div>
    </>
  );
}
