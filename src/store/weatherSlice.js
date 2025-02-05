// src/store/weatherSlice.js
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// --- Async Thunk для получения погоды ---
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { getState }) => {
    const units = getState().weather.units;
    const apiKey = "YOUR_API_KEY"; // Замените на ваш API ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units === "celsius" ? "metric" : "imperial"}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, units: units };
  },
);

// --- Redux Store setup ---
const initialState = {
  weather: null,
  history: [],
  loading: false,
  error: null,
  theme: localStorage.getItem("theme") || "light",
  units: localStorage.getItem("units") || "celsius",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCityToHistory: (state, action) => {
      const { city, temp, units } = action.payload;
      if (!state.history.some((item) => item.city === city)) {
        state.history.push({ city: city, temp: temp, units: units });
        localStorage.setItem("weatherHistory", JSON.stringify(state.history)); // Сохраняем в localStorage
      }
    },
    deleteHistory: (state) => {
      state.history = [];
      localStorage.removeItem("weatherHistory");
    },
    loadHistoryFromStorage: (state) => {
      const storedHistory = localStorage.getItem("weatherHistory");
      if (storedHistory) {
        try {
          state.history = JSON.parse(storedHistory);
        } catch (e) {
          console.error("Ошибка при разборе истории из localStorage:", e);
          localStorage.removeItem("weatherHistory");
          state.history = []; // Очищаем историю, если произошла ошибка
        }
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
      //applyTheme(action.payload); // Эту функцию нужно будет перенести в React-компонент или использовать Context API
    },
    setUnits: (state, action) => {
      const newUnits = action.payload;
      state.units = newUnits;
      localStorage.setItem("units", newUnits);

      state.history = state.history.map((item) => {
        let temp = item.temp;
        if (newUnits === "fahrenheit" && item.units === "celsius") {
          temp = Math.floor((item.temp * 9) / 5 + 32);
        } else if (newUnits === "celsius" && item.units === "fahrenheit") {
          temp = Math.floor(((item.temp - 32) * 5) / 9);
        }
        return { ...item, temp: temp, units: newUnits };
      });
      localStorage.setItem("weatherHistory", JSON.stringify(state.history)); // Сохраняем в localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Получаем текст ошибки
        state.weather = null; // Очищаем данные о погоде при ошибке
      });
  },
});

export const {
  addCityToHistory,
  deleteHistory,
  loadHistoryFromStorage,
  setTheme,
  setUnits,
} = weatherSlice.actions;

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});
