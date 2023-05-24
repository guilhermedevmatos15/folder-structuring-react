import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

// ? Components
import Routes from './routes';

// ? CSS
import './app/assets/styles/index.css';

// ? Libs
import initSmoothScroll from './app/libs/smoothScroll';

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initSmoothScroll(115, 1400);
  }, 500);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();