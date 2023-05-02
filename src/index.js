import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

// ? Components
import App from './App';

// ? CSS
import './index.css';

// ? Libs
import initSmoothScroll from './libs/smoothScroll';

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initSmoothScroll(115, 1400);
  }, 500);
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();