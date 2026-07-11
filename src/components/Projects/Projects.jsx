
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

        <div className="grid gap-6 pb-10 pt-4 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="Veyra - The Home For Modern creators"
            description="VEYRA is an AI-powered creator platform that enables creators to write, publish, and manage blogs through a modern, scalable dashboard. It features AI-assisted content generation, rich-text editing, secure authentication, and personalized analytics for followers, likes, comments, drafts, and published blogs. Built with Next.js, TypeScript, Node.js, Express.js, MongoDB, Redis, and Tailwind CSS, the platform leverages Redis caching, React Query, and performance optimizations to deliver a fast, secure, and seamless user experience."
            ghLink="https://github.com/rajatmaurya-cs/Veyra-creator-platform"
          />

          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="AI Auto Category & Tag Generator"
            description="Built an AI-driven auto category and tag generation system that analyzes content context to automatically assign relevant categories and tags. Integrated machine learning APIs, optimized data processing pipelines, and designed a responsive UI for real-time interaction, improving content discoverability and system efficiency."
            ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
          />

          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="AI B2B Proposal Generator"
            description="Built an AI-driven B2B proposal generation system that dynamically creates personalized business proposals using contextual input and NLP models. Implemented intelligent content structuring, template automation, and real-time data processing, significantly reducing proposal creation time and enhancing business productivity."
            ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
          />

        </div>

      </div>
    </div>
  );
}

export default Projects;