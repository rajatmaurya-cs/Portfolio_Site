
import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <div className="relative bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.582),rgba(12,8,24,0.904))] pb-[30px] pt-[150px]">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="pb-[10px] pt-[10px] text-[2.3em] font-medium text-white">
          My Recent <strong className="text-[#c770f0]">Works </strong>
        </h1>
        <p className="text-white">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid justify-center gap-4 pb-[10px] md:grid-cols-2 lg:grid-cols-3">

         

          <div className="h-auto px-[25px] pb-[50px] pt-[50px]">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Postify - AI Powered Blogging Platform"
              description = "Building a production-grade AI-powered blogging platform with React, Node, Express, and MongoDB that supports one-click summaries and AI-assisted content/report creation for admins. Includes secure OTP and Google sign-in, guarded routes, and scalable REST services. Focused on shipping a responsive product."

              ghLink="https://github.com/rajatmaurya-cs/Postify-AI-Powered-Blogging-Platform"
              
            />
          </div>

                    <div className="h-auto px-[25px] pb-[50px] pt-[50px]">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI auto category & Tag Generator "
              description = "Built an AI-driven auto category and tag generation system that analyzes content context to automatically assign relevant categories and tags. Integrated machine learning APIs, optimized data processing pipelines, and designed a responsive UI for real-time interaction, improving content discoverability and system efficiency."

              ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
              
            />
          </div>

          <div className="h-auto px-[25px] pb-[50px] pt-[50px]">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI B2b Proposal Generator "
              description = "Built an AI-driven B2B proposal generation system that dynamically creates personalized business proposals using contextual input and NLP models. Implemented intelligent content structuring, template automation, and real-time data processing, significantly reducing proposal creation time and enhancing business productivity."

              ghLink="https://github.com/rajatmaurya-cs/ai-auto-category-tag-generator"
              
            />
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Projects;