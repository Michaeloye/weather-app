import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherIconAndDate({ icon, date }) {
  return (
    <div className="flex items-center">
      {/* <img src={icon} alt="weather-icon" /> */}
      <WeatherIcon image={icon} size="sm" />
      <p className="-ml-5 -mt-3 text-sm text-gray-600">{date}</p>
    </div>
  );
}

export default WeatherIconAndDate;
