import React, { useEffect } from 'react';

// * Libs
import initSmoothScroll from './libs/smoothScroll';


const App = () => {
   useEffect(() => {
      initSmoothScroll(115, 1400);
   }, []);

   return (
      <>
      
      </>
   );
}

export default App;