import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * Components
import App from './app/container/App';

const Routes = (props) => {
   const Router = createBrowserRouter([
      {
         path: '/',
         element: <App />,
         children: [

         ]
      }
   ]);

   return <RouterProvider router={Router} />;
};

export default Routes;
