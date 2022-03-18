import React from "react";

function OtherStats({ stat, value }) {
  return (
    <span className="font-light">
      <span>{stat}: </span>
      <span className="opacity-80">{value}</span>
    </span>
  );
}

export default OtherStats;
