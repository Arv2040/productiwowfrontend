import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Todos from './pages/todos';
import { createRoot } from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "todos",
    element: (
      <Todos/>
    ),
  },
  {
    path:"login",
    element:(
      <Login/>
    ),
  },
  {
    path:"register",
    element:(
      <Register/>
    ),
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


