//Función para crear un nuevo usuario
function createUser(userData) {
    return fetch ('http://localhost:8080/api/auth/signup',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('No se puede crear el usuario');
        }
        return response.json();
    });
}

//Función para obtener todos los empleados
function getUser(){
    return fetch ('http://localhost:8080/api/auth/signup')
    .then(response => {
        if(!response.ok){
            throw new Error ('Error al obtener a los usuarios');
        }
        return response.json();
    });
}

//Función para obtener usuario por su ID
function getUserById(userId){
    return fetch(`http://localhost:8080/api/auth/signup/${userId}`)
    .then(response => {
        if(!response.ok){
            throw new Error('No se pudo encontrar al usario');
        }
        return response.json();
    });
}

//Función para actualizar un usuario 
function updateUser(userId,updateData){
    return fetch(`http://localhost:8080/api/auth/signup/${userId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('No se pudo atualizar el usuario');
        }
        return response.json();
    });
}

//Función para eliminar usuario 
function deleteUser(userId){
    return fetch (`http://localhost:8080/api/auth/products/${userId}`,{
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok){
            throw new Error ('No se pudo eliminar el usuario');
        }
    });
}
