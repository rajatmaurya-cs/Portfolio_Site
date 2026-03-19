import React from "react";
import {
  AiFillGithub,
  

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[rgb(10,4,22)] pb-[5px] pt-[6px]">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 text-center md:grid-cols-3 md:items-center">
        <div className="text-center">
          <h3 className="my-[0.3em] text-[0.9em] text-white">Designed and Developed by Rajat Maurya</h3>
        </div>
        <div className="text-center">
          <h3 className="my-[0.3em] text-[0.9em] text-white">Copyright © {year} RM</h3>
        </div>
        <div className="z-[1] text-center">
          <ul className="my-1 p-0">
            <li className="inline-block px-[15px]">
              <a
                href="https://github.com/rajatmaurya-cs"
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

          

            <li className="inline-block px-[15px]">
              <a
                href="https://www.linkedin.com/in/rajat-maurya-3a172331b/"
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
         
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
