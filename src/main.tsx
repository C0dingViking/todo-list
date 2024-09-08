import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'

import './index.css'

//component imports
import Root from "./components/Root.tsx";
import Lists from "./components/Lists.tsx";
import About from "./components/About.tsx";
import Login from "./components/Login.tsx";
import Home from "./components/Home.tsx";
import ErrorPage from './components/ErrorPage.tsx';



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "./components/TodoList.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "/lists/:listId",
        element: <TodoList todos={[]} />,
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
