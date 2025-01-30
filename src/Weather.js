import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherdata, setweatherData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setweatherData(response.data.main.temp);
    setReady(true);
  }

  let weatherData = {
    city: 'New York',
    temperature: 19,
    date: 'Tuesday 10:00',
    description: 'Cloudy',
    imgUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
    humidity: 80,
    wind: 10,
  };

  if (ready) {
    return (
      <div className='Weather'>
        <div className='container'>
          <form className='mb-3'>
            <div className='row'>
              <div className='col-9'>
                <input
                  type='search'
                  placeholder='Type a city..'
                  className='form-control'
                  autoComplete='off'
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
          <div className='overview'>
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='clearfix weather-temperature'>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className='float-left'
                />
                <div className='float-left'>
                  <strong>{weatherData.temperature}</strong>
                  <span className='units'>
                    <a href='/'>°C</a> | <a href='/'>°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <footer>
            This project was coded by Carolyn Thomas for{' '}
            <a href='https://www.shecodes.io/' target='blank'>
              SheCodes
            </a>{' '}
            and is open-sourced on{' '}
            <a href='https://github.com/ckhepburn/weather-react' target='blank'>
              GitHub
            </a>{' '}
            and hosted on{' '}
            <a
              href='https://app.netlify.com/sites/comfy-choux-9204e2/overview'
              target='blank'
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = '23ba5449atfff1c0e02c24fb555af64o';
    let city = 'New York';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...';
  }
}
