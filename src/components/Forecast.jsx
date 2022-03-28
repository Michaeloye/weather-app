import React from "react";
import WeatherIconAndDate from "./WeatherIconAndDate";

function Forecast({ data }) {
  return (
    <div
      className="bg-[rgba(255,255,255,0.2)] w-3/4 mx-auto h-96 rounded-3xl mt-10 overflow-y-scroll px-3 py-3"
      // The style is for glassmorphism
      style={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.07 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      {/* Days */}
      <div>
        <p>Days</p>
        {data.map((forecast) => (
          <WeatherIconAndDate
            key={forecast.datetime}
            icon={forecast.weather.icon}
            date={forecast.datetime.slice(5)}
          />
        ))}
      </div>
    </div>
  );
}

export default Forecast;
