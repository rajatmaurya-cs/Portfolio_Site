import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(199,112,240,0.6)"
          : "1px solid rgba(199,112,240,0.15)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        transition: "all 0.4s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(199,112,240,0.25), 0 0 0 1px rgba(199,112,240,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Animated gradient top border */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #c770f0, #7b2fff, #c770f0)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      {/* Image area */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          margin: "16px 16px 0",
          borderRadius: "12px",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={props.imgPath?.src || props.imgPath}
          alt={props.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "12px",
            opacity: hovered ? 1 : 0.75,
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "all 0.5s ease",
          }}
        />
        {/* Overlay gradient on image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,6,22,0.8) 0%, transparent 60%)",
            borderRadius: "12px",
          }}
        />

        {/* Type badge */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "3px 10px",
            borderRadius: "999px",
            background: "rgba(199,112,240,0.2)",
            border: "1px solid rgba(199,112,240,0.5)",
            fontSize: "0.68em",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c770f0",
            backdropFilter: "blur(8px)",
          }}
        >
          {props.isBlog ? "Blog" : "Project"}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 20px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Title */}
        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 800,
            marginBottom: "10px",
            background: "linear-gradient(135deg, #c770f0, #a855f7, #7b2fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.3,
          }}
        >
          {props.title}
        </h3>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(199,112,240,0.4), transparent)",
            marginBottom: "12px",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontSize: "0.85em",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)",
            textAlign: "left",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.description}
        </p>
      </div>

      {/* Footer: Buttons */}
      <div
        style={{
          padding: "16px 20px 20px",
          display: "flex",
          gap: "10px",
          marginTop: "auto",
        }}
      >
        <a
          href={props.ghLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "9px 18px",
            borderRadius: "10px",
            background: hovered
              ? "linear-gradient(135deg, #7b2fff, #c770f0)"
              : "rgba(199,112,240,0.12)",
            border: "1px solid rgba(199,112,240,0.4)",
            color: "white",
            fontSize: "0.85em",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.3s ease",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <BsGithub size={15} />
          {props.isBlog ? "Blog" : "GitHub"}
        </a>

        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "9px 18px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.85em",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <CgWebsite size={15} />
            Live Demo
          </a>
        )}
      </div>

      {/* Glow effect on hover */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199,112,240,0.12) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
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