import React, { useEffect } from "react";
import {
  About,
  History,
  Map,
  SearchForm,
  Settings,
  WeatherInfo,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherByCoords,
  loadHistoryFromStorage,
  setTheme,
  fetchWeatherByCity,
} from "./features/weather/weatherSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.weather.theme);
  const location = useLocation();
  const { city } = useParams();

  const history = useSelector((state) => state.weather.history);
  const weather = useSelector((state) => state.weather.weather);

  useEffect(() => {
    dispatch(loadHistoryFromStorage());
    applyTheme(theme);
  }, [dispatch, theme]);

  useEffect(() => {
    localStorage.setItem("weatherHistory", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        // Если город есть в URL, то ищем погоду для него
        dispatch(fetchWeatherByCity({ city: city, addToHistory: true }));
        localStorage.setItem("lastCity", city); // Сохраняем город в localStorage
      } else {
        // Пытаемся получить текущее местоположение
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          const { latitude, longitude } = position.coords;
          dispatch(
            fetchWeatherByCoords({
              latitude,
              longitude,
              addToHistory: false,
            })
          );
        } catch (error) {
          console.error("Ошибка геолокации:", error);
          // Если не удалось получить геолокацию, пытаемся получить lastCity из localStorage
          const lastCity = localStorage.getItem("lastCity");
          if (lastCity) {
            dispatch(
              fetchWeatherByCity({ city: lastCity, addToHistory: true })
            );
          } else {
            // TODO: Показать сообщение пользователю, что не удалось определить местоположение
            console.log("Не удалось определить местоположение и нет lastCity");
          }
        }
      }
    };

    fetchWeather();
  }, [location, dispatch, city]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme) => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  };

  return (
    <div id="app">
      <div className="button-wrapper">
        <Link to="/settings" className="button">
          Настройки
        </Link>
        <Link to="/about" className="button">
          О приложении
        </Link>
      </div>

      {location.pathname === "/settings" ? (
        <Settings />
      ) : location.pathname === "/about" ? (
        <About />
      ) : (
        <>
          <SearchForm />
          {weather && (
            <Map longitude={weather.longitude} latitude={weather.latitude} />
          )}
          <WeatherInfo />
          <History />
        </>
      )}
    </div>
  );
};

export default App;
