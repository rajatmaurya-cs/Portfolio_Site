import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AvatarFrame from "../../../components/avatarframe.jsx";
import Contact from "../../../components/contact.jsx";

import Loader from "../../../components/cat.jsx";
import PrinterAnimation from "../../../components/printer.jsx";
import TicketMachine from "../../../components/TicketMachine.jsx";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Home() {
  return (
    <section>
      {/* HERO SECTION */}
      <div
        id="home"
        className="relative z-0 bg-top bg-no-repeat pb-[30px] pt-[30px] overflow-hidden"
      >
        <Particle />
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-8 md:pt-12 text-left text-[whitesmoke]">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="pt-2 md:pt-0 md:col-span-7">
              <h1 className="pb-4 pl-0 text-[2.4em] sm:pl-[50px] flex flex-wrap items-center">
                Hi There!{" "}
                <Loader />
              </h1>

              <h1 className="pl-0 text-[2.5em] sm:pl-[45px]">
                I'M
                <strong className="text-[#cd5ff8]"> Rajat Maurya</strong>
              </h1>

              <div className="p-4 text-left sm:p-[50px]">
                <Type />
                <div className="mt-8 flex justify-start">
                  <PrinterAnimation />
                </div>
              </div>
            </div>

            <div className="pb-5 md:col-span-5">
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="mx-auto h-auto max-h-[450px] w-full"
              /> */}
              <div className="mx-auto flex h-[320px] w-full max-w-[520px] items-center justify-center sm:h-[420px] md:h-[500px] lg:h-[560px]">
                <AvatarFrame />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TICKET TOUR SECTION */}
      <div className="relative overflow-hidden pt-2 pb-16 px-4">
        {/* Ambient glow */}
        <div style={{ position: "absolute", top: "20%", right: "15%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(199,112,240,0.1) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div className="relative mx-auto max-w-2xl text-center">

          {/* Heading */}
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "12px", lineHeight: 1.2 }}>
            Take{" "}
            <span style={{ background: "linear-gradient(135deg, #cd5ff8, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Quick tour Ticket
            </span>
          </h2>

          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95em", marginBottom: "40px", lineHeight: 1.7 }}>
            Click the print button to get a quick summary of my skills & projects.
          </p>

          {/* Ticket Machine centered */}
          <div style={{ display: "flex", justifyContent: "center", minHeight: "450px" }}>
            <TicketMachine />
          </div>

          {/* Bottom divider */}
          <div style={{ marginTop: "60px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(205,95,248,0.3), transparent)" }} />
        </div>
      </div>

      <Home2 />

      {/* CONTACT SECTION */}
      <div className="relative overflow-hidden py-20 px-4">
        {/* Ambient glow orbs */}
        <div style={{ position: "absolute", top: "10%", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(205,95,248,0.15) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

        {/* Decorative grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(205,95,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(205,95,248,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div className="relative mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-4">
            <span style={{ display: "inline-block", padding: "6px 20px", borderRadius: "999px", border: "1px solid rgba(205,95,248,0.4)", background: "rgba(205,95,248,0.08)", color: "#cd5ff8", fontSize: "0.8em", letterSpacing: "0.2em", textTransform: "uppercase", backdropFilter: "blur(8px)" }}>
              ✦ Connect With Me ✦
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "white", marginBottom: "12px", lineHeight: 1.2 }}>
            Contact{" "}
            <span style={{ background: "linear-gradient(135deg, #cd5ff8, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Me
            </span>
          </h2>

          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1em", marginBottom: "48px", lineHeight: 1.7 }}>
            Hover over the card to reach out via your preferred platform.
          </p>

          {/* Y-Card centered */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Contact />
          </div>

          {/* Bottom divider */}
          <div style={{ marginTop: "60px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(205,95,248,0.4), transparent)" }} />
        </div>
      </div>
    </section>
  );
}

export default Home;
