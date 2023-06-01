import React, { createContext } from 'react';

export const contextGlobal = createContext();

const ContextGlobal = ({ children }) => {
   return (
      <contextGlobal.Provider value={{}}>
         {children}
      </contextGlobal.Provider>
   );
};

export default ContextGlobal;
