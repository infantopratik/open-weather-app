import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState([]);
	const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=a0b11112269b7756f3593c03f2485965&units=metric"
        );
        setWeather(response.data.list);
        setCurrentWeather(response.data.list[0]);
      } catch (error) {
        console.error("Err >>> ", error);
      }
    }

    fetchData();
	}, []);
	
  return (
    <div>
      <div className="current-weather">
				<div>Bengaluru</div>
				{!!currentWeather.main && <div>{currentWeather.main.temp} <span>&#8451;</span></div>}
			</div>
      <div className="upcoming">
        {!!weather.length && <ul className="upcoming-weather-container">
          {weather.map((item) => (
            <li className="weather-item" key={item.dt}>
              <div className="temp">{item.main.temp} <span>&#8451;</span></div>
              <div>{item.dt_txt}</div>
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
}
