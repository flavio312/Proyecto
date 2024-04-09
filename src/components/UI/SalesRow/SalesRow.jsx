import React from 'react';
import Button from '../Button/Button';
import CustomInput from '../Input/Input';

function SalesRow({ sale, onDelete}) {
    return (
        <tr key={sale.id}>
            <td>{sale.id}</td>
            <td>{sale.nombre}</td>
            <td>{sale.precio}</td>
            <td><CustomInput type="number"/></td>
            <td>{sale.subtotal}</td>
            <td>
                <Button onClick={() => onDelete(sale.id)} caption="Eliminar"/>
            </td>
        </tr>
    );
}

export default SalesRow;