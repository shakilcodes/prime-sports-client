import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

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
import Deshboard from './Copmponents/Deshboard/Deshboard'
import MySelected from './Copmponents/Deshboard/MySelected/MySelected'
import PrivetRoute from './Copmponents/PrivetRoute/PrivetRoute'
import AllUsers from './Copmponents/Deshboard/AllUsers/AllUsers'
import AdminRoute from './Copmponents/AdminRoute'
import AddAClass from './Copmponents/Deshboard/Instructor/AddAClass'
import MyClasses from './Copmponents/Deshboard/Instructor/MyClasses'
import ManageClasses from './Copmponents/Deshboard/ManageClasses/ManageClasses'
import Payment from './Copmponents/Deshboard/Payment/Payment'
import MyEnrolled from './Copmponents/Deshboard/MyEnrolled/MyEnrolled'




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
    element: <PrivetRoute><Deshboard></Deshboard></PrivetRoute>,
    children: [
      {
        path: '/deshboard/myselected',
        element: <MySelected></MySelected>
      },
      {
        path: 'allUsers',
        element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addAClass',
        element: <AddAClass></AddAClass>
      },
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      }, 
      {
        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>,
        
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'myEnrolled',
        element: <MyEnrolled></MyEnrolled>,
      
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
