"use client";
import React, { useRef } from "react";
import {
  SiApachekafka,
  SiRedis,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";
import { GiBull } from "react-icons/gi";
import {
  Zap,
  Layout,
  Database,
  Cloud,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
  Workflow,
} from "lucide-react";

const bentoCategories = [
  {
    id: "backend",
    title: "Distributed Systems & Backend",
    badge: "HIGH THROUGHPUT & RESILIENCE",
    icon: <Zap className="text-[#00f5ff]" size={22} />,
    themeColor: "#00f5ff",
    themeBg: "rgba(0, 245, 255, 0.08)",
    themeBorder: "rgba(0, 245, 255, 0.25)",
    summary:
      "Engineered for sub-millisecond intake, decoupled event streaming, transactional guarantees, and resilient background job workers.",
    metrics: [
      { label: "Architecture", value: "Transactional Outbox Pattern" },
      { label: "Fault Tolerance", value: "Exponential Backoff & DLQ" },
      { label: "Intake", value: "Idempotent Event Gateways" },
    ],
    technologies: [
      {
        name: "Apache Kafka",
        icon: <SiApachekafka />,
        color: "#ffffff",
        role: "Distributed Broker",
        desc: "Partitioned topics & streaming buffer",
      },
      {
        name: "Redis",
        icon: <SiRedis />,
        color: "#d82c20",
        role: "In-Memory KV",
        desc: "Atomic caching, rate limiting & state",
      },
      {
        name: "BullMQ",
        icon: <GiBull />,
        color: "#ff4444",
        role: "Queue Dispatcher",
        desc: "Worker concurrency, jitter & retries",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "#3c873a",
        role: "Async Runtime",
        desc: "High-concurrency event-loop pipelines",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "#e0e0e0",
        role: "API Framework",
        desc: "RESTful routing & auth middleware",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "MODERN UI & REACT 19",
    icon: <Layout className="text-[#c770f0]" size={22} />,
    themeColor: "#c770f0",
    themeBg: "rgba(199, 112, 240, 0.08)",
    themeBorder: "rgba(199, 112, 240, 0.25)",
    summary:
      "Crafting responsive, high-performance web applications with server-side rendering, type-safe data fetching, and fluid interactions.",
    metrics: [
      { label: "Paradigm", value: "Server Components (RSC)" },
      { label: "Type Safety", value: "100% Strict TypeScript" },
      { label: "UX / Motion", value: "Responsive Glassmorphism" },
    ],
    technologies: [
      {
        name: "Next.js 16",
        icon: <SiNextdotjs />,
        color: "#ffffff",
        role: "Full-Stack Web",
        desc: "App Router, SSR & Edge middleware",
      },
      {
        name: "React 19",
        icon: <FaReact />,
        color: "#61dafb",
        role: "UI Architecture",
        desc: "Declarative state & component lifecycle",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#3178C6",
        role: "Core Language",
        desc: "Strict type models & interface contracts",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "#38bdf8",
        role: "Styling Engine",
        desc: "Custom utility-first dark themes",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    badge: "ACID & TRANSACTIONAL INTEGRITY",
    icon: <Database className="text-[#60a5fa]" size={22} />,
    themeColor: "#60a5fa",
    themeBg: "rgba(96, 165, 250, 0.08)",
    themeBorder: "rgba(96, 165, 250, 0.25)",
    summary:
      "Relational schema modeling with strict foreign-key integrity, atomic dual-write prevention, and scalable document storage.",
    metrics: [
      { label: "Integrity", value: "PostgreSQL ACID Guarantees" },
      { label: "Migrations", value: "Declarative Prisma Schemas" },
      { label: "NoSQL Scaling", value: "MongoDB Aggregations" },
    ],
    technologies: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#4169E1",
        role: "Relational DB",
        desc: "ACID isolation, pooling & outbox tables",
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma />,
        color: "#ffffff",
        role: "Type-Safe Client",
        desc: "Schema migrations & query modeling",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47a248",
        role: "Document Store",
        desc: "Dynamic JSON schemas & indexing",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    badge: "CONTAINERS & CLOUD INFRA",
    icon: <Cloud className="text-[#f59e0b]" size={22} />,
    themeColor: "#f59e0b",
    themeBg: "rgba(245, 158, 11, 0.08)",
    themeBorder: "rgba(245, 158, 11, 0.25)",
    summary:
      "Automating reproducible container builds, scalable cloud object storage, and global edge deployments.",
    metrics: [
      { label: "Containers", value: "Multi-Stage Docker Images" },
      { label: "Cloud Infra", value: "AWS S3 & Cloud Compute" },
      { label: "Deployment", value: "Vercel Global Edge CDN" },
    ],
    technologies: [
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "#2496ed",
        role: "Containerization",
        desc: "Isolated reproducible environments",
      },
      {
        name: "AWS Cloud",
        icon: <FaAws />,
        color: "#ff9900",
        role: "Infrastructure",
        desc: "S3 storage, IAM security & EC2 compute",
      },
      {
        name: "Git & GitHub",
        icon: <SiGit />,
        color: "#f05032",
        role: "Version Control",
        desc: "Trunk branching, PR review & releases",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "#ffffff",
        role: "Edge Hosting",
        desc: "Global CDN, serverless & DNS routing",
      },
    ],
  },
];

function BentoCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[rgba(13,6,26,0.65)] p-6 backdrop-blur-xl transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Dynamic Radial Spotlight following mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${item.themeColor}18, transparent 70%)`,
        }}
      />

      {/* Top Animated Shimmer Border */}
      <div
        className="absolute top-0 left-0 h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.themeColor}, transparent)`,
        }}
      />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: item.themeBg,
                borderColor: item.themeBorder,
              }}
            >
              {item.icon}
            </div>
            <div>
              <h2 className="text-[1.25rem] font-bold text-white tracking-tight">
                {item.title}
              </h2>
            </div>
          </div>

          <span
            className="rounded-full px-2.5 py-1 text-[0.62rem] font-mono font-bold tracking-widest uppercase border"
            style={{
              color: item.themeColor,
              backgroundColor: item.themeBg,
              borderColor: item.themeBorder,
            }}
          >
            {item.badge}
          </span>
        </div>

        {/* Category Summary */}
        <p className="text-[0.88rem] leading-relaxed text-white/70 mb-5 text-left">
          {item.summary}
        </p>

        {/* Architectural Guarantees / Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
          {item.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-left"
            >
              <span className="text-[0.62rem] font-mono uppercase tracking-wider text-white/40">
                {metric.label}
              </span>
              <span className="text-[0.76rem] font-semibold text-white/90 truncate mt-0.5">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Chips / Pills Grid */}
      <div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {item.technologies.map((tech) => (
            <div
              key={tech.name}
              className="group/tech flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02]"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-[1.3rem] transition-transform duration-300 group-hover/tech:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-[0.84rem] font-bold text-white leading-tight truncate">
                  {tech.name}
                </span>
                <span className="text-[0.68rem] text-white/50 truncate mt-0.5">
                  {tech.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function TechBentoMatrix() {
  return (
    <section className="relative w-full pt-16 pb-12">
      {/* Section Header */}
      <div className="mx-auto max-w-4xl text-center mb-10 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 px-3.5 py-1 text-[0.72rem] font-bold tracking-widest text-[#c770f0] uppercase mb-3">
          <Server size={13} />
          <span>PRODUCTION-GRADE ARCHITECTURE</span>
        </div>

        <h2 className="text-[2.2em] md:text-[2.6em] font-bold text-white tracking-tight">
          Technical <strong className="text-[#c770f0]">Proficiency Matrix</strong>
        </h2>
        <p className="text-[0.98rem] text-white/70 max-w-2xl mx-auto mt-2 leading-relaxed">
          Structured architectural breakdown of production-tested event streaming, relational &amp; document databases, modern frontend engines, and automated cloud deployments.
        </p>
      </div>

      {/* 2x2 High-End Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {bentoCategories.map((item) => (
          <BentoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TechBentoMatrix;
