import React from "react";
import "./WeatherInfo.css";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container text-center current-weather-report text-white">
      <div className="row">
        <div className="co1 align-self-center">
          {" "}
          <div className="current-city-name">{props.data.city}</div>
          <WeatherIcon code={props.data.icon} size={60} color="white" />
          <br />
          <div className="condition-text" id="weather-condition">
            {props.data.description}
          </div>
          <br />
          <div className="current-temp">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="current-time-date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>
      <br />
      <div className="row align-self-center bg-light text-dark rounded pt-2 pb-2 bg-opacity-30 ">
        <div className="col info-text">
          <strong>Feels Like: </strong>
          {Math.round(props.data.feelslike)}°
        </div>
        <div className="col info-text">
          <strong>Humidity: </strong>
          {Math.round(props.data.humidity)}%
        </div>
        <div className="col info-text">
          <strong>Wind Speed: </strong>
          {Math.round(props.data.wind)}m/s
        </div>
        <div className="col info-text">
          <strong>Pressure: </strong>
          {Math.round(props.data.pressure)}hpa
        </div>
      </div>
    </div>
  );
}
