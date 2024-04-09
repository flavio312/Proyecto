import React from 'react';

const VentasList = ({ ventas }) => {
  return (
    <div>
      {ventas.map(venta => (
        <div key={venta.id}>
          <p>Codigo: {venta.codigo}</p>
          <p>Producto: {venta.producto}</p>
          <p>Precio: {venta.precio}</p>
          <p>Cantidad: {venta.cantidad}</p>
          <p>SubTotal: {venta.subtotal}</p>
          <p>Turno: {venta.turno}</p>
        </div>
      ))}
    </div>
  );
};

export default VentasList;
