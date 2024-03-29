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
import Error404 from './NotFound/Error404';
import AboutUs from './ExtraRoute/AboutUs';
import Gallery from './ExtraRoute/Gallery';

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
        path: '*',
        element: <Error404></Error404>
      },
      {
        path: '/eventDetails/:id',
        loader: () => fetch("/Data.json"),
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
      },
      {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: '/gallery',
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
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
