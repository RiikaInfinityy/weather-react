import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.";

import weather from "./images/weather.svg";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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

  function handleCurrentCityChange(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findCurrentLoc);
  }

  function search() {
    const apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function findCurrentLoc(position) {
    let apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="align-self-center text-center mt-4 mb-3">
          <img src={weather} alt="weather" width={200} />{" "}
        </div>

        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3 mt-3 ps-4 pe-4">
            <Form.Control
              type="search"
              className="form-control"
              placeholder="Search City"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleCityChange}
            />
            <Button
              variant="outline-secondary"
              type="submit"
              className="btn btn-light btn-outline-secondary btn-format"
              id="submit-button"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </Button>
            <Button
              variant="outline-secondary"
              type="submit"
              className="btn btn-light btn-outline-secondary btn-format"
              onClick={handleCurrentCityChange}
            >
              <FontAwesomeIcon icon={faLocationDot} className="search-icon" />
            </Button>
          </InputGroup>
        </Form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
