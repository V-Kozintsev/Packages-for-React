//src/App.jsx
import React, { useEffect } from "react";
import Form from "./components/Form";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <div className="container">
        <Form id="search-form" />
      </div>
      <Map />
    </>
  );
};

export default App;
