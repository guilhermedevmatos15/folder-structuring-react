import React, { createContext } from 'react';



export const ContextGlobal = createContext();


const Global = ({ children }) => {
   return (
      <ContextGlobal.Provider value={{}}>
         {children}
      </ContextGlobal.Provider>
   );
};

export default Global;
