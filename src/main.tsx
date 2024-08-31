//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'

import './index.css'

//component imports
import Root from "./components/Root.tsx";
import Lists from "./components/Lists.tsx";
import About from "./components/About.tsx";
import Login from "./components/Login.tsx";
import ErrorPage from './components/ErrorPage.tsx';



import { createBrowserRouter, RouterProvider} from "react-router-dom";



const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  }
]) ;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
