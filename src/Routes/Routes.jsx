import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Service from '../Pages/Service/Service';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Orders from '../Pages/Orders/Orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/service',
        element: <Service></Service>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contact',
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
