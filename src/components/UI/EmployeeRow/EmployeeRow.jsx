import React from 'react';
import Button from '../Button/Button';

function EmployeeRow({ user, onUpdate, onDelete}) {
    return (
        <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.turno}</td>
            <td>{user.numCont}</td>
            <td>{user.codigo}</td>
            <td>
                <Button onClick={() => onUpdate(user.codigo)} caption="Actualizar"></Button>&nbsp;&nbsp;&nbsp;
                <Button onClick={() => onDelete(user.codigo)} caption="Eliminar"></Button>
            </td>
        </tr>
    );
}

export default EmployeeRow;
