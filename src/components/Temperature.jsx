import React from "react";
import { BiRadioCircle } from "react-icons/bi";

function Temperature({ number }) {
  return (
    <div className="flex justify-center gap-1">
      <div className="text-2xl">{number}</div>
      <div className="flex flex-col items-center">
        {/* <span>°</span> */}
        <BiRadioCircle size={10} />
        <span className="-mt-[3px] text-base opacity-80">C</span>
      </div>
    </div>
  );
}

export default Temperature;
