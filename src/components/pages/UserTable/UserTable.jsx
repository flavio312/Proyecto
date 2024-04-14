import React from 'react';
import EmployeeRow from '../../UI/EmployeeRow/EmployeeRow';
import "./UserTable.css"

function UserTable({ users, onUpdate, onDelete }) {
    return (
        <table className="table">
                <tr>
                    <th>Nombre del usuario</th>
                    <th>Turno</th>
                    <th>Número de contacto</th>
                    <th>Código</th>
                    <th>Acciones</th>
                </tr>
                {users.map(user => (
                    <EmployeeRow 
                        key={user.id} 
                        user={user} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete}
                    />
                ))}
        </table>
    );
}

export default UserTable;
