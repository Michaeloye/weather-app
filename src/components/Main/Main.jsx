import axios from "axios";
import { useState, useEffect } from "react";
import Current from "../Current";
import Forecast from "../Forecast";

function Main({ state, country }) {
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState("");
  const [apparentTemperature, setApparentTemperature] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [clouds, setClouds] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windDetails, setwindDetails] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherbit.io/v2.0/current?city=${state}&country=${country}&key=aa281b7f79634dd9865be4d29994feda`
      )
      .then((res) => {
        const data = res.data.data[0];
        console.log(data);
        setCityName(data.city_name);
        setDate(data.datetime.slice(0, data.datetime.indexOf(":")));
        setApparentTemperature(data.app_temp);
        setTemperature(data.temp);
        setWeatherIcon(data.weather.icon);
        setWeatherDescription(data.weather.description);
        setClouds(data.clouds);
        setHumidity(data.rh);
        setwindDetails(data.wind_cdir + data.wind_spd);
      })
      .catch((err) => console.log(err.message));

    return () => {
      null;
    };
  }, []);

  return (
    <div>
      <Current
        cityName={cityName}
        date={date}
        apparentTemperature={apparentTemperature}
        temperature={temperature}
        weatherIcon={weatherIcon}
        weatherDescription={weatherDescription}
        clouds={clouds}
        humidity={humidity}
        windDetails={windDetails}
      />
      <Forecast />
    </div>
  );
}

export default Main;
