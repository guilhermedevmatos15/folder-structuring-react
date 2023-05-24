import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

// * Router
import Routes from './Routes';

// * CSS
import './app/assets/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();