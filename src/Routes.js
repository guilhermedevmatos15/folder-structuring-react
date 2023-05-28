import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * Components
import App from './App';

const Routes = (props) => {
   const Router = createBrowserRouter([
      {
         path: '/',
         element: <App />,
         children: [
            {
               path: '',
               element: ''
            }
         ]
      }
   ]);

   return <RouterProvider router={Router} />;
};

export default Routes;
