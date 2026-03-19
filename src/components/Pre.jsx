import React from "react";
function Pre(props) {
  return (
    <div
      className={
        props.load
          ? "fixed inset-0 z-[999999] bg-[#0c0513] bg-[url('/src/Assets/pre.svg')] bg-center bg-no-repeat"
          : "pointer-events-none opacity-0"
      }
    />
  );
}

export default Pre;
