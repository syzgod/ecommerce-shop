import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './pages/register/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Account from './pages/account/Account';
import Services from './pages/services/Services';
import Basket from './pages/basket/Basket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/basket',
    element: <Basket />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
