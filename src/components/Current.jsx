import React from "react";

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
      <div>
        <span>{apparentTemperature}</span> <span>{temperature}</span>
      </div>
      <div>
        <img src="" alt={weatherIcon} /> <p>{weatherDescription}</p>
      </div>
      <div>
        <span>cloud coverage: {clouds}</span> <span>Humidity: {humidity}%</span>
        <span>Wind: {windDetails}</span>
      </div>
    </div>
  );
}

export default Current;
