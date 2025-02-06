import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import './Weather.css';
import WeatherForecast from './WeatherForecast';
import axios from 'axios';

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=23ba5449atfff1c0e02c24fb555af64o&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <div className='container'>
          <form onSubmit={handleSubmit} className='mb-3'>
            <div className='row'>
              <div className='col-9'>
                <input
                  type='search'
                  placeholder='Type a city..'
                  className='form-control'
                  autoComplete='off'
                  onChange={handleCityChange}
                />
              </div>
              <div className='col-3'>
                <input
                  type='submit'
                  value='Search'
                  className='btn btn-primary w-100'
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}
