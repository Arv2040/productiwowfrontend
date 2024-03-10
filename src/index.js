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
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


