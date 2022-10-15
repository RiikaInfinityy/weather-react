import React from "react";
import "./WeatherInfo.css";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container text-center current-weather-report bg-light border-white rounded bg-opacity-50">
      {" "}
      <div className="row">
        <div className="col-auto align-self-center mt-2">
          <WeatherIcon code={props.data.icon} size={50} />
          <br />
          <span className="condition-text" id="weather-condition">
            {props.data.description}
          </span>
        </div>
        <div
          className="col-auto align-self-center current-temp"
          id="current-temp"
        >
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-auto align-self-center"></div>
        <div className="col align-self-center additional-info">
          <br />
          <br />
          <p>
            <strong>Feels Like: </strong>
            <span id="feelslike">{Math.round(props.data.feelslike)}</span>°
          </p>
          <p>
            <strong>Humidity: </strong>
            <span id="humidity">{Math.round(props.data.humidity)}</span>%
          </p>
          <p>
            <strong>Wind Speed: </strong>
            <span id="wind">{Math.round(props.data.wind)}</span>m/s
          </p>
          <p>
            <strong>Pressure: </strong>
            <span id="pressure">{Math.round(props.data.pressure)}</span>hpa
          </p>
        </div>
        <div className="col-auto currentLoc align-self-center">
          <p className="current-city-name" id="current-location">
            {props.data.city}
          </p>

          <div className="current-time-date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>
    </div>
  );
}
