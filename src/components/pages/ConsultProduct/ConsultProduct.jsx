import React, { useState, useEffect } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import "./ConsultProduct.css"

function ConsultProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products');
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de productos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        getProducts();
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const handleUpdate = async (productId, updatedProductData) => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProductData)
            });
            if (!response.ok) {
                throw new Error('No se pudo actualizar el producto');
            }
            const updatedProducts = products.map(product => {
                if (product.id === productId) {
                    return { ...product, ...updatedProductData };
                }
                return product;
            });
            setProducts(updatedProducts);
            closeModal();
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('No se pudo eliminar el producto');
            }
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    return (
        <div>
            <ProductTable 
                products={products} 
                onUpdate={openModal} 
                onDelete={handleDelete} 
            />
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Actualizar Producto</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const updatedProductData = {
                                // Aquí obtienes los datos del formulario
                            };
                            handleUpdate(selectedProduct.id, updatedProductData);
                        }}>
                            {/* Aquí coloca los campos del formulario para actualizar el producto */}
                            <button type="submit">Actualizar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ConsultProduct;
