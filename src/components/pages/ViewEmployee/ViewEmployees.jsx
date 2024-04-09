import React from 'react';
import UserTable from '../UserTable/UserTable';

function ViewEmployees() {
    const users = [
        { id: 1, nombre: 'Jualia', contraseña:'password3423', turno:'Matutino', phone:'91912639393' },
        { id: 2, nombre: 'Juana', contraseña:'password3423', turno:'Matutino', phone:'91912639393' },
        { id: 3, nombre: 'Rosalia', contraseña:'password3423', turno:'Matutino', phone:'91912639393' },
    ];

    const handleUpdate = (userId) => {
        // Implementar lógica para actualizar el usuario con el ID userId
    };

    return (
        <UserTable 
            users={users} 
            onUpdate={handleUpdate} 
        />
    );
}

export default ViewEmployees;
