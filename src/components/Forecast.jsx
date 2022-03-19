import React from "react";

function Forecast() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.2)] w-3/4 mx-auto h-96 rounded-3xl mt-10"
      style={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.07 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      Forecast
    </div>
  );
}

export default Forecast;
