import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Login/Signup';
import Appoinment from '../../Pages/Appoinment/Appionment/Appoinment';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/login',
            element: <Login></Login>,
         },
         {
            path: '/signup',
            element: <Signup></Signup>,
         },
         {
            path: '/appoinment',
            element: <Appoinment></Appoinment>,
         },
      ],
   },
   {
      path: '/dashboard',
      element: (
         <PrivateRoute>
            {' '}
            <Dashboard></Dashboard>
         </PrivateRoute>
      ),
   },
]);
