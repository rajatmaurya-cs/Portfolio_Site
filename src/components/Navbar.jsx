import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FiBriefcase } from "react-icons/fi";

function NavBar() {

  const [expand, updateExpanded] = useState(false);
  
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        updateExpanded(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinkClass =
    "relative z-[1] px-4 py-3 text-white no-underline transition-all duration-300 after:absolute after:bottom-[1px] after:left-0 after:-z-[1] after:block after:h-[5px] after:w-0 after:rounded-2xl after:bg-[#c95bf5] after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2 justify-center md:justify-start";

  return (
    <nav
      className={`fixed left-0 top-0 z-[1000] w-full px-8 py-3 text-[1.2rem] transition-all duration-300 ${
        navColour || expand
          ? "bg-[#1b1a2ea9] shadow-[0_10px_10px_0_rgba(9,5,29,0.171)] backdrop-blur-[15px]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end md:flex-nowrap">
        <button
          aria-label="Toggle navigation"
          onClick={() => updateExpanded(!expand)}
          className="relative ml-auto flex flex-col justify-center md:hidden"
        >
          <span
            className={`my-[5px] block h-1 w-[27px] bg-[#be50f4] transition-all duration-300 ${
              expand ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`my-[5px] block h-1 w-[27px] bg-[#be50f4] transition-all duration-300 ${
              expand ? "opacity-0" : ""
            }`}
          />
          <span
            className={`my-[5px] block h-1 w-[27px] bg-[#be50f4] transition-all duration-300 ${
              expand ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>

        <ul
          className={`w-full list-none flex-col items-start gap-4 pl-0 pt-4 pb-4 md:pt-0 md:pb-0 md:flex md:w-auto md:flex-row md:items-center ${
            expand ? "flex" : "hidden"
          }`}
        >
          <li className="md:ml-5 w-full md:w-auto">
            <Link href="/" onClick={() => updateExpanded(false)} className={navLinkClass}>
              <AiOutlineHome className="mb-[2px] inline-block" /> Home
            </Link>
          </li>
          <li className="md:ml-5 w-full md:w-auto">
            <Link href="/about" onClick={() => updateExpanded(false)} className={navLinkClass}>
              <AiOutlineUser className="mb-[2px] inline-block" /> About
            </Link>
          </li>
          <li className="md:ml-5 w-full md:w-auto">
            <Link href="/experience" onClick={() => updateExpanded(false)} className={navLinkClass}>
              <FiBriefcase className="mb-[2px] inline-block" /> Experience
            </Link>
          </li>
          <li className="md:ml-5 w-full md:w-auto">
            <Link href="/project" onClick={() => updateExpanded(false)} className={navLinkClass}>
              <AiOutlineFundProjectionScreen className="mb-[2px] inline-block" /> Projects
            </Link>
          </li>
          <li className="md:ml-5 w-full md:w-auto">
            <Link href="/resume" onClick={() => updateExpanded(false)} className={navLinkClass}>
              <CgFileDocument className="mb-[2px] inline-block" /> Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
