import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import IniciarSesion from '../pages/LogIn/IniciarSesion';
import Menu from '../pages/Main/Menu';
import Productos from '../pages/Products/Productos';
import CBox from '../pages/CBox/CBox';
import Ventas from '../pages/Sales/Ventas';


const router = createBrowserRouter([
  {
    path: '/',
    element: <IniciarSesion />
  },
  {
    path: '/menuEmpleado',
    element: <Menu />
  },
  {
    path: '/productos',
    element: <Productos />
  },
  {
    path: '/ventas',
    element: <Ventas />
  },
  {
    path: '/corte-turno',
    element: <CBox />
  }
]);

export default router;