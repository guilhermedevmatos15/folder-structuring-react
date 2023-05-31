import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// * Libs
import initSmoothScroll from './libs/smoothScroll';


const App = () => {
   useEffect(() => {
      initSmoothScroll(115, 1400);
   }, []);

   return (
      <>
         <Outlet />
      </>
   );
}

export default App;