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
import Choose from './pages/choose';
import Journal from './pages/journal';
import Pomodoro from './pages/pomodoro';
import About from './Components/About';

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
  },{
    path:"choose",
    element:(
      <Choose/>
    )
  },{
    path:"journal",
    element:(
      <Journal/>
    )
  },{
    path:"pomodoro",
    element:(
      <Pomodoro/>
    )
  }
 
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


