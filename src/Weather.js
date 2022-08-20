import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [city, setCity] = useState("tehran");
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      currentTemp: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ad98cfa59bdce2d355527064e3835264";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Weather">
      <div className="MainBorder">
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <img
              src={"https://ssl.gstatic.com/onebox/weather/64/sunny.png"}
              alt=""
              className="icon"
              id="icon"
            />
            <span className="current-temp" id="current-temp">
              {weatherData.currentTemp}
            </span>
            <span className="units">
              <a href="/" className="celecius">
                {" "}
                °C
              </a>
              <strong> | </strong>
              <a href="/" className="farenhite">
                °F
              </a>
            </span>
          </div>
          <div className="col-6">
            <ul className="weather-condition">
              <li className="current-sky">{weatherData.description}</li>
              <li className="wind-speed">
                Wind: <span>{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <i className="fa-solid fa-caret-up"></i>
            <span className="max-temp">{weatherData.maxTemp}</span>
            <span className="degree-sign">°</span>
            <i className="fa-solid fa-caret-down"></i>
            <span className="min-temp">{weatherData.minTemp}</span>
            <span className="degree-sign">°</span>
          </div>
          <div className="col-6">
            <span className="current-date">{"saturday 10:00 pm"}</span>
          </div>
        </div>
        <hr />
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="form-control btn btn-primary shadow"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="current"
                className="form-control btn btn-danger shadow"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="Author">
        <a
          href="https://github.com/TwobA1987/my-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source{" "}
        </a>
        Coded by toobA Raeesi
      </div>
    </div>
  );
}
