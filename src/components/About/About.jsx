import React from "react";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AppleVisionPro from "../../../components/applevision";

function About() {
  return (
    <>
      <Particle />
      <div className="relative overflow-x-clip pb-[30px] pt-[60px] md:pt-[100px] text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center justify-center gap-6 p-[10px] md:grid-cols-12">
            <div className="pb-[50px] pt-0 md:col-span-7">
              <h1 className="pb-5 text-[2.1em]">
                Know Who <strong className="text-[#c770f0]">I'M</strong>
              </h1>
              <Aboutcard />
            </div>
            <div className="pb-[50px] pt-0 md:col-span-5">
              <img src={laptopImg.src || laptopImg} alt="about" className="h-auto w-full" />
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-6 xl:flex-nowrap">
            <div className="flex min-w-0 flex-1 flex-col items-center">
              <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                <AppleVisionPro />
              </div>
              <h1 className="pb-[10px] pt-[10px] text-[2.3em] font-medium text-white">
                Professional <strong className="text-[#c770f0]">Skillset</strong>
              </h1>
              <Techstack />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center">
              <h1 className="pb-[10px] pt-[10px] text-[2.3em] font-medium text-white">
                <strong className="text-[#c770f0]">Tools</strong> I use
              </h1>
              <Toolstack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
