import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Copmponents/Root/Root.jsx';
import Login from './Copmponents/LogIn&SignUp/Login.jsx';
import SignUp from './Copmponents/Root/SignUp.jsx';
import AuthProvider from './Copmponents/AuthPorvider/AuthPorvider.jsx';
import Instructors from './Copmponents/Pages/Instructors/Instructors.jsx';
import Home from './Copmponents/Pages/Home/Home.jsx';
import Classes from './Copmponents/Pages/Classes/Classes.jsx';
import Deshboard from './Copmponents/Pages/Deshboard/Deshboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/instructor',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: 'deshboard',
    element: <Deshboard></Deshboard>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
