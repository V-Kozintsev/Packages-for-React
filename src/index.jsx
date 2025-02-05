import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weather/weatherSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as YMap from "ymaps3";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

const initializeYMap = async () => {
  await YMap.ready; // Wait for YMap to be ready
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="weather/:city" element={<App />} />{" "}
          {/*  Pass route to App  */}
          <Route path="*" element={<App />} /> {/*  App handles everything */}
        </Routes>
      </HashRouter>
    </Provider>
  );
};

initializeYMap(); // Call the initializer
