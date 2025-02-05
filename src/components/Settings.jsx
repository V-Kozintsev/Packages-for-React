import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, setUnits } from "../features/weather/weatherSlice";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const theme = useSelector((state) => state.weather.theme);
  const units = useSelector((state) => state.weather.units);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  const handleUnitsChange = (e) => {
    dispatch(setUnits(e.target.value));
  };

  const handleSaveSettings = () => {
    //  Убираем навигацию, чтобы остаться на странице настроек
    console.log("Настройки сохранены!");
  };

  const handleGoHome = () => {
    navigate("/"); // Переход на главную страницу
  };

  return (
    <div id="settings-page" className="settings-page">
      <h2>Настройки</h2>
      <div className="settings-group">
        <label>Тема:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="light">Светлая</option>
          <option value="dark">Темная</option>
        </select>
      </div>
      <div className="settings-group">
        <label>Единицы измерения:</label>
        <select id="units-select" value={units} onChange={handleUnitsChange}>
          <option value="celsius">Цельсий</option>
          <option value="fahrenheit">Фаренгейт</option>
        </select>
      </div>
      <button type="button" id="save-settings" onClick={handleSaveSettings}>
        Сохранить
      </button>
      <button type="button" id="home-button" onClick={handleGoHome}>
        {" "}
        {/* Кнопка "На главную" */}
        На главную
      </button>
    </div>
  );
};

export default Settings;
