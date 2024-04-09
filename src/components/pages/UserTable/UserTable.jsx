import React from 'react';
import EmployeeRow from '../../UI/EmployeeRow/EmployeeRow';
import "./UserTable.css"

function UserTable({ users, onUpdate, onDelete }) {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del usuario</th>
                    <th>Contraseña</th>
                    <th>Turno</th>
                    <th>Número de contacto</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <EmployeeRow 
                        key={user.id} 
                        user={user} 
                        onUpdate={onUpdate} 
                    />
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
