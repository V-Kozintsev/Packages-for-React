//src/components/WeatherDisplay.jsx
import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";

const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather);
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return <div className="displayWeatherInfo">Загрузка...</div>;
  }

  if (!weather) {
    return <div className="displayWeatherInfo"></div>;
  }

  const { temp, city, iconUrl, windKph, humidity, formattedTime } = weather;

  return (
    <div className="displayWeatherInfo">
      <p className="weather-description" id="city">
        {temp}°C
      </p>
      <p className="weather-description" id="temp">
        {city}
      </p>
      {iconUrl && <Image id="weather-icon" src={iconUrl} alt="Иконка погоды" />}
      <p className="weather-description">Дата и время: {formattedTime}</p>
      <p className="weather-description">Скорость ветра: {windKph} km/h</p>
      <p className="weather-description">Влажность: {humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
