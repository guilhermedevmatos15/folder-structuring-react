import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

// * Styles
import './app/styles/global/main.scss';

// * Router
import Routes from './Routes';

// * Contexts
import Global from './app/contexts/Global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Global>
         <Routes />
      </Global>
   </React.StrictMode>
);

reportWebVitals();
