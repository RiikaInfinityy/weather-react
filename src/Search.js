import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
{
  /*import WeatherForecast from "./WeatherForecast."; */
}

import weather from "./images/weather.svg";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log("true");
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
      feelslike: response.data.main.feels_like,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4abcc39b04e548daee77c144d7483bb4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
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
              onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        {/* <WeatherForecast coordinates={weatherData.coordinates} /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
