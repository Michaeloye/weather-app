function WeatherIcon({ image, size }) {
  return (
    <img
      src={`https://www.weatherbit.io/static/img/icons/${image}.png`}
      alt="weather-icon"
      className={size == "sm" ? "scale-50" : ""}
    />
  );
}

export default WeatherIcon;
