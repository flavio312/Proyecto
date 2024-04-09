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
