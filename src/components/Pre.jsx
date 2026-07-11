import React from "react";

import Lottie from "lottie-react";


import Rocket from '../../components/Rocket.json'

function Pre(props) {
  return (
    <div
      className={
        props.load
          ? "fixed inset-0 z-[999999] flex flex-col items-center justify-center transition-opacity duration-300"
          : "fixed inset-0 z-[999999] pointer-events-none opacity-0 flex flex-col items-center justify-center transition-opacity duration-300"
      }
    >
    
      <div className="w-[900px] sm:w-[950px] translate-y-10 sm:translate-y-12 mt-20">
        {/* <Pan /> */}
        <Lottie animationData={Rocket} loop={true} />
      </div>
    </div>
  );
}

export default Pre;
