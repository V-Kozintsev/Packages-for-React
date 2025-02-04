//src/App.jsx
import React, { useEffect } from "react";
import Form from "./components/Form";
import Map from "./components/Map";
import HistoryDisplay from "./components/HistoryDisplay";
import WeatherDisplay from "./components/WeatherDisplay";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom"; // Исправлен импорт
import { loadHistoryFromStorage } from "./store/weatherSlice";
import { router } from "./router";

const App = () => {
  useEffect(() => {
    store.dispatch(loadHistoryFromStorage());
    router();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Form id="search-form" />
        </div>
        <WeatherDisplay />
        <Map />
        <HistoryDisplay />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
