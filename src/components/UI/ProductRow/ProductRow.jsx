import React from 'react';
import Button from '../Button/Button';

function ProductRow({ product, onUpdate, onDelete }) {
    return (
        <tr key={product.id}>
            <td>{product.codigo}</td>
            <td>{product.nombre}</td>
            <td>{product.stock}</td>
            <td>{product.precioCompra}</td>
            <td>{product.precioVenta}</td>
            <td>{product.seccion}</td>
            <td>
                <Button onClick={() => onUpdate(product.id)} caption="Actualizar"></Button>
                <Button onClick={() => onDelete(product.id)} caption="Eliminar"></Button>
            </td>
        </tr>
    );
}

export default ProductRow;
