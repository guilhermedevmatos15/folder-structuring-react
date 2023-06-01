import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

// * Styles
import './app/styles/global/main.scss';

// * Router
import Routes from './Routes';

// * Contexts
import ContextGlobal from './app/contexts/ContextGlobal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ContextGlobal>
         <Routes />
      </ContextGlobal>
   </React.StrictMode>
);

reportWebVitals();
