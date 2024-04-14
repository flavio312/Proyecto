import React, { useState, useEffect } from 'react';
import Text from '../../UI/Text/Text';
import ProductTable from '../ProductTable/ProductTable';
import CustomInput from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import "./ConsultProduct.css"

function ConsultProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/productsAdmin');
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

    const openModal = (codigo) => {
        setSelectedProduct(codigo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const handleUpdate = async (id, updatedProductData) => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProductData)
            });
            if (!response.ok) {
                throw new Error('No se pudo actualizar el producto');
            }
            // Actualizar el estado local solo si la solicitud se completa con éxito
            const updatedProduct = await response.json();
            const updatedProducts = products.map(product => {
                if (product.codigo === id) { // Aquí utilizamos el id en lugar del codigo
                    return { ...product, ...updatedProduct };
                }
                return product;
            });
            setProducts(updatedProducts);
            closeModal();
            // Mostrar mensaje de actualización exitosa
            console.log('Actualización exitosa');
            alert("Producto Actualizado correctamente");
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };
    

    const handleDelete = async (codigo) => {
        // Confirmación antes de eliminar
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
        if (!confirmDelete) return; // Si el usuario cancela, no prodece a eliminar el producto seleccionado 

        try {
            const response = await fetch(`http://localhost:8080/api/products/${codigo}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('No se pudo eliminar el producto');
            }
            // Si la eliminación fue exitosa, actualiza el estado de los productos eliminando el producto con el codigo correspondiente
            const updatedProducts = products.filter(product => product.codigo !== codigo);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
        console.log('Producto eliminado correctamente');
        alert("Producto eliminado correctamente")
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
                   <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const updatedProductData = {
                        codigo: parseInt(formData.get('codigo')),
                        nombre: formData.get('nombre'),
                        stock: parseInt(formData.get('stock')),
                        precioCompra: parseFloat(formData.get('precioCompra')),
                        precioVenta: parseFloat(formData.get('precioVenta')),
                        seccion: formData.get('seccion')
                    };
                    handleUpdate(selectedProduct, updatedProductData);
                }}>
                    <Text text="Actualizar Producto" size="large"/>
                    <label htmlFor="codigo">Código:</label>
                    <CustomInput type="number" name="codigo" placeholder="Código" />
                    <label htmlFor="nombre">Nombre:</label>
                    <CustomInput type="text" name="nombre" placeholder="Nombre" />
                    <label htmlFor="stock">Cantidad:</label>
                    <CustomInput type="number" name="stock" placeholder="Cantidad" />
                    <label htmlFor="precioCompra">Precio de compra:</label>
                    <CustomInput type="number" name="precioCompra" placeholder="Precio de compra" />
                    <label htmlFor="precioVenta">Precio de venta:</label>
                    <CustomInput type="number" name="precioVenta" placeholder="Precio de venta" />
                    <label htmlFor="seccion">Sección:</label>
                    <CustomInput type="text" name="seccion" placeholder="Sección" />
                    <Button type="submit" caption="Actualizar producto"/>
                </form>

               </div>
           </div>
            )}
        </div>
    );
}

export default ConsultProduct;
