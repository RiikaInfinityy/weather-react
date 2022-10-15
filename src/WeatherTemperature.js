import React from "react";

import "./WeatherInfo.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span> <span className="unit">|</span>{" "}
      <span className="unit">°F</span>
    </div>
  );
}
