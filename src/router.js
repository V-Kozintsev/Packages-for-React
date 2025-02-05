//src/router.js
import { fetchWeatherByCity } from "./api/weatherApi";
import { fetchWeatherByCoords } from "./api/weatherApi";
import { store } from "./store";
import { fetchWeatherFailure } from "./store/weatherSlice";

export function router() {
  const hash = window.location.hash.slice(1);

  if (hash.startsWith("weather/")) {
    const city = hash.slice(8);
    fetchWeatherByCity(city);
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
      },
      (error) => {
        store.dispatch(
          fetchWeatherFailure("Ошибка геолокации:" + error.message),
        );
      },
    );
  }
}
window.addEventListener("hashchange", router);
