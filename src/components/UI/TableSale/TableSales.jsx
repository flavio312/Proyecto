import React, { useState, useEffect } from 'react';
import BotonCompras from '../BotonCompras/BotonCompras';
import SalesTable from '../TablaVentas/TableSales';

function TableSales() {
    const initialSales = [
        { id: 1, nombre: 'Moño', precio: '23', cantidad: '1', subtotal: '23' },
        { id: 2, nombre: 'Calcetas', precio: '50', cantidad: '12', subtotal: '600' },
        { id: 3, nombre: 'Mochila', precio: '25', cantidad: '4', subtotal: '100' },
    ];

    const [sales, setSales] = useState(initialSales);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        calculateTotalPrice();
        calculateProductQuantities();
    }, [sales]);

    const calculateTotalPrice = () => {
        const totalPrice = sales.reduce((total, sale) => total + parseFloat(sale.subtotal), 0);
        setTotalPrice(totalPrice);
    };

    const calculateProductQuantities = () => {
        const productQuantities = sales.reduce((quantities, sale) => {
            const { nombre, cantidad } = sale;
            if (!quantities[nombre]) {
                quantities[nombre] = 0;
            }
            quantities[nombre] += parseInt(cantidad);
            return quantities;
        }, {});
        setProductQuantities(productQuantities);
    };

    const handleDelete = (salesId) => {
        const updatedSales = sales.filter(sale => sale.id !== salesId);
        setSales(updatedSales);
    };

    return (
        <div>
            <SalesTable sales={sales} onDelete={handleDelete} />
            <div className="total-container">
                <h2>Total General de Ventas: ${totalPrice.toFixed(2)}</h2>
                <h3>Cantidad Total de Ventas por Producto:</h3>
                <ul>
                    {Object.entries(productQuantities).map(([productName, quantity]) => (
                        <li key={productName}>
                            {productName}: {quantity} unidades
                        </li>
                    ))}
                </ul>
            </div> <br />
            <BotonCompras/>
        </div>
    );
}

export default TableSales;
