import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather defaultCity='New York' />
    <footer>
      This project was coded by Carolyn Thomas for{' '}
      <a
        href='https://www.shecodes.io/'
        target='blank'
        rel='noopener noreferrer'
      >
        SheCodes
      </a>{' '}
      and is open-sourced on{' '}
      <a
        href='https://github.com/ckhepburn/weather-react'
        target='blank'
        rel='noopener noreferrer'
      >
        GitHub
      </a>{' '}
      and hosted on{' '}
      <a
        href='https://app.netlify.com/sites/comfy-choux-9204e2/overview'
        target='blank'
        rel='noopener noreferrer'
      >
        Netlify
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
