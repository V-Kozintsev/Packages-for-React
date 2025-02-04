//src/components/HistoryDisplay.jsx
import React from "react";
import { useSelector } from "react-redux";

const HistoryDisplay = () => {
  const historyData = useSelector((state) => state.history);

  return (
    <div id="history" className="history">
      {historyData.map((item) => (
        <p
          key={item.city}
          onClick={() => (window.location.hash = `/weather/${item.city}`)}
          style={{ cursor: "pointer" }}
        >
          {item.city}: {item.temp}°C
        </p>
      ))}
    </div>
  );
};

export default HistoryDisplay;
