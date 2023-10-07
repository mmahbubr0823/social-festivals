import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Register from './Routes/Register';
import MyAuthContext from './AuthProvider/MyAuthContext';
import EventDetails from './EventDetails/EventDetails';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: '/register',
        element: <Register></Register>

      },
      {
        path:'/eventDetails/:id',
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: ()=> fetch("./Data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthContext>
      <RouterProvider router={router} />
    </MyAuthContext>
  </React.StrictMode>,
)
