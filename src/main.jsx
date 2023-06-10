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
import UpdateClass from './Copmponents/Deshboard/UpdateClass/UpdateClass'
import FeedBack from './Copmponents/Deshboard/FeedBack/FeedBack'
import FeedBackInstructor from './Copmponents/Deshboard/FeedBackInstructor/FeedBackInstructor'
import ErrorPage from './Copmponents/ErrorPage/ErrorPage'
import ErolledHistory from './Copmponents/Deshboard/MyEnrolled/ErolledHistory/ErolledHistory'
import InstructorRoute from './Copmponents/InstructorRoute'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <Classes></Classes>,
      }
    ]
  },
  {
    path: 'deshboard',
    element: <PrivetRoute><Deshboard></Deshboard></PrivetRoute>,
    children: [
      {
        path: '/deshboard/myselected',
        element: <PrivetRoute><MySelected></MySelected></PrivetRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addAClass',
        element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      }, 
      {
        path: 'manageClasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
        
      },
      {
        path: 'payment/:id',
        element:<PrivetRoute> <Payment></Payment></PrivetRoute>
      },
      {
        path: 'myEnrolled',
        element: <PrivetRoute><MyEnrolled></MyEnrolled></PrivetRoute>,
      
      },
      {
        path: 'updateClass/:id',
        element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
      },
      {
        path: 'feedBack/:id',
        element: <AdminRoute><FeedBack></FeedBack></AdminRoute>
      },
      {
        path: 'InstructorfeedBack/:id',
        element: <InstructorRoute><FeedBackInstructor></FeedBackInstructor></InstructorRoute>
      },
      {
        path: 'enrolledHistory',
        element: <PrivetRoute><ErolledHistory></ErolledHistory></PrivetRoute>
      },
      
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
