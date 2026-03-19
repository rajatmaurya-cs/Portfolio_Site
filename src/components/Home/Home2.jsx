import React from "react";

import myimg from "../../Assets/myImg.jpg"
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <div className="relative py-[70px]" id="about">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-12">
          
          <div className="pb-5 pt-[100px] text-center text-white md:col-span-8">
            <h1 className="text-[2.6em]">
              LET ME <span className="text-[#c770f0]"> INTRODUCE </span> MYSELF
            </h1>
            <p className="pt-[50px] text-left text-[1.2em]">
              I’m a passionate Software Engineer and Computer Science undergraduate who enjoys turning ideas into efficient, scalable, and real-world solutions. Over time, I’ve explored multiple technologies and developed a strong interest in problem-solving, system design, and building impactful applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="text-[#c770f0]">
                  {" "}
                  C, C++, JavaScript, Tailwind CSS, React.js, Express.js, Node.js, MongoDB{" "}
                </b>
              </i>
              and enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="text-[#c770f0]">
                  {" "}
                  scalable web applications, RESTful APIs, and modern full-stack systems{" "}
                </b>
              </i>
              while continuously strengthening my core computer science fundamentals.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="text-[#c770f0]"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="text-[#c770f0]">React.js</b>{" "}

              </i>
            </p>
          </div>

         

          <div className="flex items-center justify-center pt-8 md:col-span-4 md:pt-0">
            <Tilt
              className="relative inline-flex items-center justify-center rounded-full p-[14px] before:pointer-events-none before:absolute before:inset-[-6px] before:rounded-full before:border-[8px] before:border-transparent before:[background:conic-gradient(from_0deg,rgba(199,112,240,0.25),rgba(199,112,240,0.95),rgba(138,73,168,0.3),rgba(199,112,240,0.95),rgba(199,112,240,0.25))_border-box] before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:animate-orbitSpin after:pointer-events-none after:absolute after:inset-[-6px] after:rounded-full after:border-2 after:border-[rgba(199,112,240,0.45)] after:shadow-[0_0_18px_rgba(199,112,240,0.65),0_0_34px_rgba(109,32,197,0.45)] after:animate-profileOrbitPulse"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
            >
              <img
                src={myimg}
                className="relative z-[2] h-[260px] w-[260px] rounded-full border-4 border-[rgba(138,43,226,0.6)] object-cover shadow-[0_0_25px_rgba(138,43,226,0.6),0_0_60px_rgba(138,43,226,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(138,43,226,0.9),0_0_80px_rgba(138,43,226,0.6)]"
                alt="avatar"
              />
            </Tilt>
          </div>



        </div>
      </div>
    </div>
  );
}
export default Home2;
