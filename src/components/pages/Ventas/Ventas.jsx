import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import VentasList from '../../UI/Ventas/VentasList';
import VentasPDF from '../../UI/Ventas/VentasPDF';

// Ejemplo de datos de ventas
const ventas = [
  { codigo: 1, producto: 'Camisa', precio: 50, cantidad: 2,subtotal:100 },
  { codigo: 2, producto: 'Pantalón', precio: 30, cantidad: 3 ,subtotal:90},
  { codigo: 3, producto: 'Zapatos', precio: 20, cantidad: 5, subtotal:100},
  // Más datos de ventas aquí...
];

const Ventas = () => {
  const [filtro, setFiltro] = useState('');

  return (
    <div className="center">
      <VentasPDF ventas={ventas} filtro={filtro} />
    </div>
  );
};

export default Ventas;
