import React from "react";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const weather = useSelector((state) => state.weather.weather);
  const units = useSelector((state) => state.weather.units);

  if (!weather) {
    return <div className="displayWeatherInfo"></div>;
  }

  return (
    <div className="displayWeatherInfo">
      <p className="weather-description" id="city">
        {weather.city}
      </p>
      <p className="weather-description" id="temp">
        {weather.temp}°{units === "fahrenheit" ? "F" : "C"}
      </p>
      {weather.iconUrl && (
        <img id="weather-icon" src={weather.iconUrl} alt="Иконка погоды" />
      )}
      <p className="weather-description">
        Скорость ветра: {weather.windKph} km/h
      </p>
      <p className="weather-description">Влажность: {weather.humidity}%</p>
    </div>
  );
};

export default WeatherInfo;
