import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col rounded-[20px] bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-400 ease-out border ${
        hovered
          ? "border-[#c770f0]/60 -translate-y-2 shadow-[0_20px_60px_rgba(199,112,240,0.25),_0_0_0_1px_rgba(199,112,240,0.3),_inset_0_1px_0_rgba(255,255,255,0.1)]"
          : "border-[#c770f0]/15 translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      } color-white h-full`}
    >
      {/* Animated gradient top border */}
      <div
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#c770f0] via-[#7b2fff] to-[#c770f0]"
        style={{
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      {/* Image area */}
      <div className="relative overflow-hidden m-4 rounded-xl bg-black/20">
        <img
          src={props.imgPath?.src || props.imgPath}
          alt={props.title}
          className={`w-full aspect-video object-cover rounded-xl transition-all duration-500 ${
            hovered ? "scale-105 opacity-100" : "scale-100 opacity-75"
          }`}
        />
        {/* Overlay gradient on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0616]/80 to-transparent rounded-xl" />

        {/* Type badge */}
        <span className="absolute top-[10px] right-[10px] px-2.5 py-1 rounded-full bg-[#c770f0]/20 border border-[#c770f0]/50 text-[0.68em] tracking-widest uppercase text-[#c770f0] backdrop-blur-sm">
          {props.isBlog ? "Blog" : "Project"}
        </span>
      </div>

      {/* Card body & footer wrapper */}
      <div className="flex flex-col flex-1 p-5 pt-0">
        {/* Title */}
        <h3 className="text-[1.3rem] font-extrabold mb-2.5 bg-gradient-to-r from-[#c770f0] via-[#a855f7] to-[#7b2fff] bg-clip-text text-transparent leading-snug">
          {props.title}
        </h3>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-[#c770f0]/40 to-transparent mb-3" />

        {/* Description */}
        <div className="text-[0.95rem] leading-relaxed text-white/75 text-left flex-grow overflow-visible">
          {props.description}
        </div>

        {/* Footer: Buttons */}
        <div className="flex gap-2.5 mt-5">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 px-[18px] py-[9px] rounded-xl border border-[#c770f0]/40 text-[0.85em] font-semibold text-white no-underline transition-all duration-300 flex-1 justify-center ${
              hovered
                ? "bg-gradient-to-r from-[#7b2fff] to-[#c770f0]"
                : "bg-[#c770f0]/10"
            }`}
          >
            <BsGithub size={15} />
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-[18px] py-[9px] rounded-xl border border-white/15 bg-white/5 text-[0.85em] font-semibold text-white/80 no-underline transition-all duration-300 flex-1 justify-center hover:bg-white/10"
            >
              <CgWebsite size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div
        className={`absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full pointer-events-none transition-opacity duration-400 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle, rgba(199,112,240,0.12) 0%, transparent 70%)",
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </article>
  );
}

export default ProjectCards;