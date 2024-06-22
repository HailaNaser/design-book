import React from 'react';
import FristPage from '../Pages/FristPage';
import SecondPage  from '../Pages/SecondPage';
// import Nav from '../component/Nav';
import Home from '../Pages/Home';
import Books from '../Pages/Books';
// import Books from './Pages/Books';
// import Summery from '../Pages/Summery'
import BookDetaila from '../Pages/BookDetaila';
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
        {
          path: '/FristPage',
          element: <FristPage/>
        },
        {
          path: '/Books',
          element: <Books/>
        },
        {
          path: '/Books/:id',
          element: <BookDetaila/>
        },




        // {
        //   path: '/Book/:id',
        //   element: <BookDetaila/>
        // },
        // {
        //   path: '/BookDetaila/:id',
        //   element: <BookDetaila/>
        // }

  
      ]);
  return (
    <RouterProvider router={router} />

  )
}
export default Router 