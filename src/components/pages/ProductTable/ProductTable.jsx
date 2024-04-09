import React from 'react';
import ProductRow from '../../UI/ProductRow/ProductRow';
import "./ProductTable.css";

function ProductTable({ products, onUpdate, onDelete }) {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio Compra</th>
                    <th>Precio Venta</th>
                    <th>Sección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <ProductRow 
                        key={product.id} 
                        product={product} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete} 
                    />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;
