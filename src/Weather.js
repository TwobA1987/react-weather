import React from "react";
import "./Weather.css";
export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="MainBorder">
        <h1>{props.city}</h1>
        <div className="row">
          <div className="col-6">
            <img
              src={"https://ssl.gstatic.com/onebox/weather/64/sunny.png"}
              alt=""
              className="icon"
              id="icon"
            />
            <span className="current-temp" id="current-temp">
              {props.CurrentTemp}
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
              <li className="current-sky">{props.CurrentSky}</li>
              <li className="wind-speed">
                Wind: <span>{props.WindSpeed}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <i className="fa-solid fa-caret-up"></i>
            <span className="max-temp">{props.MaxTemp}</span>
            <span className="degree-sign">°</span>
            <i className="fa-solid fa-caret-down"></i>
            <span className="min-temp">{props.MinTemp}</span>
            <span className="degree-sign">°</span>
          </div>
          <div className="col-6">
            <span className="current-date">{props.CurrentDate}</span>
          </div>
        </div>
        <hr />
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autofocus="on"
                autocomplete="off"
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
