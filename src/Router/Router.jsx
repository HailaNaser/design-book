import React from 'react';
// import fristPage from '../Pages/fristPage';
import SecondPage  from '../Pages/SecondPage';
import Nav from '../component/Nav';
import Home from '../Pages/Home';
// import Books from './Pages/Books';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
 function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/SecondPage",
          element: <SecondPage/>,
        },
      ]);
  return (
    <RouterProvider router={router} />

  )
}
export default Router 