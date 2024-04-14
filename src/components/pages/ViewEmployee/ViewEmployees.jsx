import React, { useState, useEffect } from 'react';
import CustomInput from '../../UI/Input/Input';
import UserTable from '../UserTable/UserTable';
import Text from '../../UI/Text/Text';
import Button from '../../UI/Button/Button';
import "./ViewEmployees.css"

function ViewEmployees() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/user');
                console.log(response.status);
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de usuarios');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        };

        getUsers();
    }, []);

    const openModal = (clave) => {
        setSelectedUser(clave);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };
    
    const handleUpdateUser = async (clave, updatedProductData) => {
        try {
            const response = await fetch(`http://localhost:8080/api/test/adminU/${clave}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProductData)
            });
            if (!response.ok) {
                throw new Error('No se pudo actualizar el usuario');
            }
            // Actualizar el estado local solo si la solicitud se completa con éxito
            const updatedUser = await response.json();
            const updatedUsers = users.map(user => {
                if (user.codigo === clave) { // Aquí utilizamos el id en lugar del codigo
                    return { ...user, ...updatedUser };
                }
                return user;
            });
            setProducts(updatedUsers);
            closeModal();
            // Mostrar mensaje de actualización exitosa
            alert("Actualización exitosa")
            console.log('Actualización exitosa');
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            alert("No se puede actualizar los datos");
        }
    };
    

    const handleDeleteUser = async (clave) => {
        const confirmDelete = window.confirm('¿Estás seguro que desea eliminar al usuario?');
        if(!confirmDelete) return;//Si el usuario cancela no se eliminara el usuario
        try {
            const response = await fetch(`http://localhost:8080/api/test/adminD/${clave}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('No se pudo eliminar el usuario');
            }
            // Si la eliminación fue exitosa, actualiza el estado de los usuarios eliminando el usuario con el ID correspondiente
            const updatedUsers = users.filter(user => user.clave !== clave);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
        console.log("usuario eliminado correctamente");
        alert("Usuario eliminado correctamente")
    };
    

    return (
        <div>   
            <UserTable 
            users={users} 
            onUpdate={openModal}
            onDelete={handleDeleteUser}
        />
        {isModalOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const updatedUserData = {
                            username: formData.get('username'),
                            turno: formData.get('turno'),
                            numCont: parseFloat(formData.get('numCont')),
                            password: formData.get('password'), // Cambiado de 'nombre'
                            clave: parseInt(formData.get('clave'))
                        };
                        handleUpdateUser(selectedUser, updatedUserData);
                    }}>
                        <Text text="Actualizar Empleados" size="large"/>
                        <label htmlFor="username">Nombre</label>
                        <CustomInput type="text" name="username" placeholder="Nombre"/>
                        <label htmlFor="turno">Turno</label>
                        <CustomInput type="text" name="turno" placeholder="Turno"/>
                        <label htmlFor="numCont">Numero de contacto</label>
                        <CustomInput type="number" name="numCont" placeholder="Numero"/>
                        <label htmlFor="password">Contraseña</label>
                        <CustomInput type="password" name="password" placeholder="Contraseña"/> {/* Cambiado a 'password' */}
                        <label htmlFor="clave">Clave</label>
                        <CustomInput type="number" name="clave" placeholder="Clave"/>
                        <Button type="submit" caption="Actualizar"/>
                    </form>

                </div>
            </div>
        )}
        </div>
    );
}

export default ViewEmployees;
