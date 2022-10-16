import React, { useState } from "react";

import "./WeatherInfo.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">°C</span>
        </div>
        <button
          type="submit"
          className="btn btn-light btn-outline-secondary btn-edit btn-sm"
          onClick={showFahrenheit}
        >
          Convert to °F
        </button>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(fahrenheit())}
          <span className="unit">°F</span>
        </div>
        <button
          type="submit"
          className="btn btn-light btn-outline-secondary btn-edit btn-sm"
          onClick={showCelsius}
        >
          Convert to °C
        </button>
      </div>
    );
  }
}
