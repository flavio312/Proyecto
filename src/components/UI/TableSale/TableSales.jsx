import React, { useState, useEffect } from 'react';
import BotonCompras from '../BotonCompras/BotonCompras';
import SalesTable from '../TablaVentas/TableSales';

function TableSales() {
    const [sales, setSales] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        const getSales = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/sales');
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de ventas');
                }
                const data = await response.json();
                setSales(data);
            } catch (error) {
                console.error('Error al obtener las ventas:', error);
            }
        };

        getSales();
    }, []);

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
            const { productName, quantity } = sale;
            if (!quantities[productName]) {
                quantities[productName] = 0;
            }
            quantities[productName] += parseInt(quantity);
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
