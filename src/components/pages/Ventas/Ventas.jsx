import React, { useState, useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import VentasList from '../../UI/Ventas/VentasList';
import VentasPDF from '../../UI/Ventas/VentasPDF';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await fetch('http://44.223.166.115:8080/api/products');
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos de ventas');
        }
        const data = await response.json();
        setVentas(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVentas();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filtrar ventas en función del estado de filtro
  const filteredVentas = ventas.filter(venta =>
    venta.producto && venta.producto.toLowerCase().includes(filtro.toLowerCase())
  );
  return (
    <div className="center">
      <VentasPDF ventas={filteredVentas} />
    </div>
  );
};

export default Ventas;

