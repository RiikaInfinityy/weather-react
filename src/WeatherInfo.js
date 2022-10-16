import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="container text-center current-weather-report">
      <div className="row">
        <div className="co1 align-self-center">
          {" "}
          <div className="current-city-name">{props.data.city}</div>
          <WeatherIcon code={props.data.icon} size={60} color="#F3C5C5" />
          <br />
          <div className="condition-text" id="weather-condition">
            {props.data.description}
          </div>
          <br />
          <div className="temperature">
            {Math.round(props.data.temperature)}
            <span className="align-text-top unit">°</span>
            <div className="feelslike-text">
              Feels Like: {""}
              {Math.round(props.data.feelslike)}°s
            </div>
          </div>
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <br />
      <div className="row align-self-center bg-light text-dark rounded pt-2 pb-2 bg-opacity-30 ">
        <div className="col info-text">
          <strong>Humidity: </strong>
          <br />
          <div className="info-text-expand">
            {Math.round(props.data.humidity)}%
          </div>
        </div>
        <div className="col info-text">
          <strong>Wind Speed: </strong> <br />
          <div className="info-text-expand">
            {Math.round(props.data.wind)}m/s
          </div>
        </div>
        <div className="col info-text">
          <strong>Pressure: </strong> <br />
          <div className="info-text-expand">
            {" "}
            {Math.round(props.data.pressure)}hpa
          </div>
        </div>
      </div>
    </div>
  );
}
