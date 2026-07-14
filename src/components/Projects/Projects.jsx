
import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import GithubCard from "../../../components/github";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
            imgPath={bitsOfCode}
            isBlog={false}
            title="Veyra - The Home For Modern creators"
            description={
              <div className="flex flex-col gap-2 text-[0.9em]">
                <p>
                  VEYRA is a full-stack, AI-powered platform where creators can publish, manage, and monetize their blogs through a comprehensive analytics dashboard.
                </p>
                <ul className="list-none space-y-1.5 mt-2">
                  <li>📊 <strong className="text-white">Creator Dashboard:</strong> Track followers, manage drafts, and generate articles using built-in AI tools.</li>
                  <li>🛡️ <strong className="text-white">Two-Tier AI Moderation:</strong> Automated JS and AI layers instantly filter spam and harassment from comment sections.</li>
                  <li>💳 <strong className="text-white">Monetization & Limits:</strong> Integrated Razorpay for premium subscription upgrades to unlock higher AI generation limits.</li>
                  <li>🔒 <strong className="text-white">Robust Security:</strong> OTP and Google Auth, JWT rotation, and Redis-backed rate limiting to prevent API abuse.</li>
                  <li>👑 <strong className="text-white">Dynamic SuperAdmin:</strong> Real-time control over global AI limits, pricing tiers, and app features with complete audit logs.</li>
                  <li>⚡ <strong className="text-white">Tech Stack:</strong> Next.js, TypeScript, React Query, Node.js, Express, MongoDB, and Redis.</li>
                </ul>
              </div>
            }
            ghLink="https://github.com/rajatmaurya-cs/Veyra-creator-platform"
          />

          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="NoteFlow"
            description={
              <div className="flex flex-col gap-2 text-[0.9em]">
                <p>
                  NoteFlow is a next-gen productivity suite built specifically for students — combining intelligent note-taking, an AI tutor, task scheduling, and progress analytics into one beautiful, distraction-free workspace.
                </p>
                <ul className="list-none space-y-1.5 mt-2">
                  <li>📝 <strong className="text-white">Smart Notes:</strong> Create and organize notes with a sleek rich-text editor</li>
                  <li>🤖 <strong className="text-white">AI Tutor:</strong> Access multiple AI models to solve academic questions instantly</li>
                  <li>📥 <strong className="text-white">Save AI Answers:</strong> Save any AI response directly into your notes with one click</li>
                  <li>📅 <strong className="text-white">Task Scheduler:</strong> Manage daily tasks, set priorities, and never miss a deadline</li>
                  <li>📈 <strong className="text-white">Progress Tracker:</strong> Visualize your study habits and streaks with interactive charts</li>
                  <li>🌙 <strong className="text-white">Premium Dark UI:</strong> Smooth, eye-friendly dark interface crafted for long study sessions</li>
                  <li>⚡ <strong className="text-white">Focus Mode:</strong> Distraction-free environment to maximize concentration</li>
                </ul>
              </div>
            }
            ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
          />



        </div>

      </div>
    </div>
  );
}

export default Projects;