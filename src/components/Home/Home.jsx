
import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Home() {
  return (
    <section>
      {/* HERO SECTION */}
      <div
        id="home"
        className="relative -z-10 bg-top bg-no-repeat pb-[30px] pt-[30px]"
      >
        <Particle />
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-36 text-left text-[whitesmoke]">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="pt-20 md:col-span-7">
              <h1 className="pb-4 pl-0 text-[2.4em] sm:pl-[50px]">
                Hi There!{" "}
                <span
                  className="inline-block origin-[70%_70%] animate-wave"
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="pl-0 text-[2.5em] sm:pl-[45px]">
                I'M
                <strong className="text-[#cd5ff8]"> Rajat Maurya</strong>
              </h1>

              <div className="p-4 text-left sm:p-[50px]">
                <Type />
              </div>
            </div>

            <div className="pb-5 md:col-span-5">
              <img
                src={homeLogo}
                alt="home pic"
                className="mx-auto h-auto max-h-[450px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Home2 />

      {/* CONTACT SECTION */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="pb-20 pt-12">
          <div className="pt-6 text-center text-white">

            <h1>Get In Touch</h1>

            <p>
              Feel free to <span className="text-[#c770f0]">connect</span> with me
            </p>



            {/* SOCIAL ICONS */}
            <ul className="relative inline-block justify-center pl-0 pt-4">
              <li className="inline-block px-[15px]">
                <a
                  href="mailto:rajatmaurya.dev@gmail.com"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.972)] text-[1.2em] leading-[2em] text-[#700c86] transition duration-500 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:scale-90 before:rounded-full before:bg-[#68187a] before:transition before:duration-500 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:[text-shadow:0_0_2px_#87209e] hover:before:scale-110 hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <MdEmail />
                </a>
              </li>

              <li className="inline-block px-[15px]">
                <a
                  href="https://github.com/rajatmaurya-cs"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.972)] text-[1.2em] leading-[2em] text-[#700c86] transition duration-500 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:scale-90 before:rounded-full before:bg-[#68187a] before:transition before:duration-500 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:[text-shadow:0_0_2px_#87209e] hover:before:scale-110 hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="inline-block px-[15px]">
                <a
                  href="https://www.linkedin.com/in/rajat-maurya-3a172331b/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.972)] text-[1.2em] leading-[2em] text-[#700c86] transition duration-500 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:scale-90 before:rounded-full before:bg-[#68187a] before:transition before:duration-500 hover:text-[#87209e] hover:shadow-[0_0_5px_#87209e] hover:[text-shadow:0_0_2px_#87209e] hover:before:scale-110 hover:before:shadow-[0_0_15px_#801f95]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
