import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <article className="h-full rounded-lg bg-transparent text-white opacity-90 shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)] transition-all duration-500 hover:scale-[1.02] hover:overflow-hidden hover:shadow-[0_4px_4px_5px_rgba(129,72,144,0.561)]">
      <img
        src={props.imgPath}
        alt="card-img"
        className="rounded-[10px] p-5 opacity-80"
      />
      <div className="p-4">

        <h3 className="mb-[5px] bg-gradient-to-r from-[#c770f0] to-[#8a49a8] bg-clip-text text-[1.5rem] font-extrabold text-transparent">
          {props.title}
        </h3>

        <p className="text-left">
          {props.description}
        </p>
        <a
          href={props.ghLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-[#623686] bg-[#623686] px-4 py-2 text-white transition hover:border-[#6d20c5d7] hover:bg-[#6d20c5d7]"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </a>



        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            className="ml-[10px] inline-flex items-center rounded-md border border-[#623686] bg-[#623686] px-4 py-2 text-white transition hover:border-[#6d20c5d7] hover:bg-[#6d20c5d7]"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        )}
      </div>
    </article>
  );
}
export default ProjectCards;