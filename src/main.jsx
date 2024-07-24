import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './page/Accueil/App';
import About from './page/About/About';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/footer';
import Container from './Container';
import './page/Accueil/App.css';
import AppartPage from './page/Logement/AppartPage';
import ErrorPage from './page/Error/ErrorPage';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/Appart/:appartId",
        element: <AppartPage />
      },
      {
        path: "/About",
        element: <About />
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
