import React from "react";
import OtherStats from "./OtherStats";
import Temperature from "./Temperature";

function Current({
  cityName,
  date,
  apparentTemperature,
  temperature,
  weatherIcon,
  weatherDescription,
  clouds,
  humidity,
  windDetails,
}) {
  return (
    <div className="text-white text-center">
      <div className="mt-5 md:mt-10 flex flex-row justify-center gap-2">
        <span>{cityName}</span>
        <span className="opacity-70">•</span>
        <span className="opacity-70 font-light">{date}</span>
      </div>
      <div className="mt-3 md:mt-5 flex justify-center gap-5">
        <Temperature number={apparentTemperature} />
        <Temperature number={temperature} />
      </div>
      <div>
        <img src="" alt={weatherIcon} /> <p>{weatherDescription}</p>
      </div>
      <div className="flex justify-center gap-5 text-sm md:text-base mt-5">
        <OtherStats stat={"Cloud coverage"} value={clouds} />
        <OtherStats stat={"Humidity"} value={`${humidity}%`} />
        <OtherStats stat={"Wind"} value={windDetails} />
      </div>
    </div>
  );
}

export default Current;
