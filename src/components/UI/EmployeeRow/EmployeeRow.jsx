import React from 'react';
import Button from '../Button/Button';

function EmployeeRow({ user, onUpdate}) {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nombre}</td>
            <td>{user.contraseña}</td>
            <td>{user.turno}</td>
            <td>{user.phone}</td>
            <td>
                <Button onClick={() => onUpdate(user.id)} caption="Actualizar"/>
            </td>
        </tr>
    );
}

export default EmployeeRow;
