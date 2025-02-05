import React from "react";
import { useNavigate } from "react-router-dom";

const About = ({ appVersion }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Переход на главную страницу
  };

  return (
    <div id="about-page">
      <h2>О приложении</h2>
      <p>
        Это простое приложение для отображения текущей погоды в любом городе
        мира и определения местоположения на карте.
      </p>
      <p>
        Версия: <span id="app-version">{appVersion}</span>
      </p>
      <p>Используемые технологии:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux Toolkit</li>
        <li>WeatherAPI (для получения данных о погоде)</li>
        <li>Yandex Maps API (для отображения карты)</li>
      </ul>
      <p>Разработчик: Ваше Имя</p>
      <p>Контакт: your.email@example.com</p>
      <p>
        Репозиторий на
        <a href="https://github.com/V-Kozintsev" target="_blank">
          GitHub
        </a>
      </p>
      <button type="button" id="home-button" onClick={handleGoHome}>
        {" "}
        {/* Кнопка "На главную" */}
        На главную
      </button>
    </div>
  );
};

export default About;
