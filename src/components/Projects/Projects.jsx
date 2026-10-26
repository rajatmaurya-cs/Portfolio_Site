import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import GithubCard from "../../../components/github";

import hydraImg from "../../Assets/Projects/hydra.png";
import veyraImg from "../../Assets/Projects/veyra.png";
import {
  RefreshCw,
  Zap,
  Layers,
  ShieldAlert,
  ShieldCheck,
  KeyRound,
  Activity,
  Code2,
  LayoutDashboard,
  CreditCard,
  Lock,
  Crown,
} from "lucide-react";

function Projects() {
  return (
    <div className="relative pb-[30px] pt-[60px] md:pt-[100px]">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="pb-[10px] pt-[10px] text-[2.3em] font-medium text-white">
          My Recent <strong className="text-[#c770f0]">Works </strong>
        </h1>
        <p className="text-white">
          Here are a few projects I've worked on recently.
        </p>

        {/* Placing Github Component at the top for better visibility */}
        <div className="mt-8 flex w-full justify-center pb-8 pt-4">
          <GithubCard />
        </div>

        <div className="grid gap-8 pb-10 pt-4 md:grid-cols-1 lg:grid-cols-2">

          <ProjectCard
            imgPath={hydraImg}
            isBlog={false}
            title="HYDRA — Reliable Webhook Delivery Platform"
            description={
              <div className="flex flex-col gap-2.5 text-[0.88rem] leading-relaxed">
                <p className="text-white/80">
                  HYDRA is an enterprise-grade, high-throughput event gateway and webhook delivery engine designed for distributed systems to guarantee <strong className="text-white">zero data loss</strong>, sub-millisecond ingestion, and reliable multi-tenant fan-out.
                </p>
                <ul className="list-none space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <RefreshCw size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Transactional Outbox Pattern:</strong> Stages events and outbox states atomically via PostgreSQL ACID transactions, eliminating dual-write inconsistencies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Zap size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Distributed Kafka Streaming:</strong> Decouples ultra-fast ingestion (&lt;1ms) from dispatch pipelines using an asynchronous poller producing to Apache Kafka topics.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Layers size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">BullMQ &amp; Redis Fan-Out:</strong> Concurrently routes events to multi-tenant endpoints with isolated worker queues, automatic retries, and exponential backoff.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <ShieldAlert size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Backpressure &amp; Idempotency:</strong> Layer 1 gate auto-rejects traffic (HTTP 503 if pending entries &gt; 10k) to protect DB health; deduplicates intake via Idempotency-Key.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <KeyRound size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">HMAC-SHA256 Signatures:</strong> Signs every outbound payload with timestamped cryptographic hashes to prevent replay attacks and payload tampering.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Activity size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">DLQ &amp; Observability:</strong> Real-time dashboard for delivery logs, latency metrics, failure triage, and one-click manual/automated Dead Letter Queue replay.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Code2 size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Tech Stack:</strong> TypeScript, Node.js, Express, PostgreSQL, Prisma ORM, Apache Kafka, Redis, BullMQ, Next.js 16.
                    </span>
                  </li>
                </ul>
              </div>
            }
            ghLink="https://github.com/rajatmaurya-cs/HYDRA"
            demoLink="https://hydra-phi-three.vercel.app"
          />

          <ProjectCard
            imgPath={veyraImg}
            isBlog={false}
            title="Veyra - The Home For Modern creators"
            description={
              <div className="flex flex-col gap-2.5 text-[0.88rem] leading-relaxed">
                <p className="text-white/80">
                  VEYRA is a full-stack, AI-powered platform where creators can publish, manage, and monetize their blogs through a comprehensive analytics dashboard.
                </p>
                <ul className="list-none space-y-2 mt-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <LayoutDashboard size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Creator Dashboard:</strong> Track followers, manage drafts, and generate articles using built-in AI tools.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <ShieldCheck size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Two-Tier AI Moderation:</strong> Automated JS and AI layers instantly filter spam and harassment from comment sections.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <CreditCard size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Monetization &amp; Limits:</strong> Integrated Razorpay for premium subscription upgrades to unlock higher AI generation limits.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Lock size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Robust Security:</strong> OTP and Google Auth, JWT rotation, and Redis-backed rate limiting to prevent API abuse.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Crown size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Dynamic SuperAdmin:</strong> Real-time control over global AI limits, pricing tiers, and app features with complete audit logs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 text-[#c770f0] shrink-0">
                      <Code2 size={15} />
                    </span>
                    <span>
                      <strong className="text-white font-medium">Tech Stack:</strong> Next.js, TypeScript, React Query, Node.js, Express, MongoDB, and Redis.
                    </span>
                  </li>
                </ul>
              </div>
            }
            ghLink="https://github.com/rajatmaurya-cs/Veyra-creator-platform"
            demoLink="https://veyra-creator-platform.vercel.app/Home"
          />

        </div>

      </div>
    </div>
  );
}

export default Projects;
