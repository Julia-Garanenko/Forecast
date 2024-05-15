import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("0");
  let [humidity, setHumidity] = useState("0");

  function updateCity(event) {
    //event.preventDefault();
    setCity(event.target.value);
  }
  function ShowForecast(response) {
    //event.preventDefault();
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(ShowForecast);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control input-color"
                placeholder="Enter a city..."
                aria-label="Enter a city..."
                aria-describedby="button-addon2"
                onChange={updateCity}
              />

              <button type="submit" className="btn btn-primary button-search">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <ul>
            <li>{city}</li>
            <li>Temperature: {temperature}°C</li>
            <li>Description:</li>
            <li>Humidity: {humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
