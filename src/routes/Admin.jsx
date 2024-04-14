import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IniciarSesion from '../pages/LogIn/IniciarSesion';
import Menu from '../pages/Main/Menu';
import Productos from '../pages/Products/Productos';
import NuevoProducto from '../pages/Form/NuevoProducto';
import Empleados from '../pages/Employees/Empleados';
import AddEmployee from '../components/pages/AddEmployee/AddEmployee';
import CutBoxDay from '../pages/CutBoxDay/CutBoxDay';
import DeleteEmployee from '../components/UI/DeleteEmployee/DeleteEmployee';
import CBox from '../pages/CBox/CBox';
import Ventas from '../pages/Sales/Ventas';
import UpdateProduct from '../components/pages/UpdateProduct/UpdateProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IniciarSesion />
  },{
    path: '/actualizar-producto',
    element:<UpdateProduct/>
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/productos',
    element: <Productos />
  },
  {
    path: '/nuevo-producto',
    element: <NuevoProducto />
  },
  {
    path: '/empleados',
    element: <Empleados />
  },
  {
    path: '/nuevo-empleado',
    element: <AddEmployee />
  },
  {
    path: '/eliminar-empleado',
    element: <DeleteEmployee />
  },
  {
    path: '/ventas',
    element: <Ventas />
  },
  {
    path: '/corte-turno',
    element: <CBox />
  },
  {
    path: '/corte-dia',
    element: <CutBoxDay />
  }
]);

export default router;
