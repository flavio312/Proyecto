import React, { useState } from 'react';
import BotonCompras from '../BotonCompras/BotonCompras';
import SalesTable from '../TablaVentas/TableSales';
import SearchBox from '../SearchBox/Search-box';

function TableSales() {
    const [sales, setSales] = useState([]);
    
    const agregarProductoVenta = (producto) => {
        setSales([...sales, producto]);
    };

    const guardarVenta = async () => {
        try {
            const response = await fetch('http://44.223.166.115:8080/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sales),
            });
            if (!response.ok) {
                throw new Error('No se pudo guardar la venta');
            }
            setSales([]);
        } catch (error) {
            console.error('Error al guardar la venta:', error);
        }
    };

    return (
        <div>
            <div className="search">
            <SearchBox onProductoEncontrado={agregarProductoVenta} />
            </div><br /><br />
            <SalesTable sales={sales} /><br /><br />
            <BotonCompras onClick={guardarVenta} />
        </div>
    );
}

export default TableSales;

