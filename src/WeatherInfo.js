import React from 'react';
import FormattedDate from './FormatedDate';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props) {
  return (
    <div className='WeatherInfo'>
      <div className='overview'>
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated: <FormattedDate date={props.data.date} />
          </li>
          <li className='text-capitalize'>{props.data.description}</li>
        </ul>
      </div>
      <div className='row'>
        <div className='col-6'>
          <div className='clearfix weather-temperature'>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className='float-left'
            />
            <div className='float-left'>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
