// Función para crear un nuevo producto
function createProduct(productData) {
  return fetch('http://localhost:8080/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo crear el producto');
    }
    return response.json();
  });
}

// Función para obtener todos los productos
function getProducts() {
  return fetch('http://localhost:8080/api/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de productos');
    }
    return response.json();
  });
}

// Función para obtener un producto por su ID
function getProductById(productId) {
  return fetch(`http://localhost:8080/api/products/${productId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener el producto');
    }
    return response.json();
  });
}

// Función para actualizar un producto
function updateProduct(productId, updatedData) {
  return fetch(`http://localhost:8080/api/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo actualizar el producto');
    }
    return response.json();
  });
}

// Función para eliminar un producto
function deleteProduct(productId) {
  return fetch(`http://localhost:8080/api/products/${productId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo eliminar el producto');
    }
  });
}
