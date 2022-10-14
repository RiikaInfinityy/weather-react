import React, { useState } from "react";
import axios from "axios";

import weather from "./images/weather.svg";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("Stockholm");
  let [temperature, setTemperature] = useState(null);
  let [result, setResult] = useState("Stockholm");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=4abcc39b04e548daee77c144d7483bb4&units=metric`;
  axios.get(url).then(showTemperature);

  function handleSubmit(event) {
    event.preventDefault();
    setResult(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  return (
    <div className="Search">
      <p />
      <form className="row g-3 search-bar" onSubmit={handleSubmit}>
        <div className="col-3 align-self-center text-center">
          <img src={weather} alt="weather" width={140} />{" "}
        </div>
        <div className="col-3 align-self-center text-start"></div>
        <div className="col-4 align-self-center text-start">
          <input
            type="search"
            className="form-control"
            id="city-input"
            placeholder="Search City"
            onChange={updateCity}
          />
        </div>
        <div className="col-auto align-self-center text-center ms-0 ">
          <button
            type="submit"
            className="btn btn-light btn-outline-secondary btn-edit"
            id="submit-button"
          >
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </button>
          {"  "}
          <button
            type="submit"
            className="btn btn-light btn-outline-secondary btn-edit"
            id="current-loc-button"
          >
            <i className="fa-solid fa-location-dot search-icon"></i>
          </button>
        </div>
        <div className="col-auto"></div>
      </form>
      <div className="container text-center current-weather-report bg-light border-white rounded bg-opacity-50">
        {" "}
        <div className="row">
          <div className="col-auto align-self-center">
            <i className="current-weather-icon fa-solid fa-cloud-sun partlycloudy fa-fade "></i>
            <br />
            <span className="condition-text" id="weather-condition">
              Cloudy
            </span>
          </div>
          <div
            className="col-auto align-self-center current-temp"
            id="current-temp"
          >
            {temperature}
            <span className="celsius-text-format">&#176;C</span>
          </div>
          <div className="col-auto align-self-center"></div>
          <div className="col align-self-center additional-info">
            <br />
            <br />
            <p>
              <strong>Feels Like: </strong>
              <span id="feelslike">16</span>°
            </p>
            <p>
              <strong>Humidity: </strong>
              <span id="humidity">85</span>%
            </p>
            <p>
              <strong>Wind Speed: </strong>
              <span id="wind">3</span>m/s
            </p>
            <p>
              <strong>Pressure: </strong>
              <span id="pressure">1010</span>hpa
            </p>
          </div>
          <div className="col-auto currentLoc align-self-center">
            <p className="current-city-name" id="current-location">
              {result}
            </p>
            <div className="current-time-date">
              <i className="bi bi-calendar-heart"></i>{" "}
              <span id="current-day"> Wednesday</span>
              <i className="bi bi-dot"></i>
              <span id="current-date">5 October 2022</span>
            </div>
            <div className="current-time">
              Last Updated on <span id="current-time">09:55</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
