import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './pages/ProductoBiodegradable.css';
import './pages/Productos.css';
import './pages/Home.css';
import './pages/Contactenos.css';
import './pages/auth/Bolsas.css';
import './pages/auth/Envases.css';
import './pages/auth/TiposPro.css';
import './pages/auth/ToallitasDesechables.css';

import ProductoBiodegradable from './pages/ProductoBiodegradable';
import Productos from './pages/Productos';
import Home from './pages/Home';
import TiposPro from './pages/auth/TiposPro';
import Contactenos from './pages/Contactenos';
import ToallitasDesechables from './pages/auth/ToallitasDesechables';
import Envases from './pages/auth/Envases';
import Bolsas from './pages/auth/Bolsas';


const router = createBrowserRouter([
  { path: '/productos', element: <Productos /> },
  { path: '/', element: <Home /> },
  { path: '/biodegradable', element: <ProductoBiodegradable /> },
  { path: '/Tipos', element: <TiposPro /> },
  { path: '/Contactenos', element: <Contactenos /> },
  { path: '/Toallitas', element: <ToallitasDesechables /> },
  { path: '/Envases', element: <Envases /> },
  { path: '/Bolsas', element: <Bolsas /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
