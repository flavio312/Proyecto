import React, { useState } from "react";
import CustomInput from "../Input/Input";
import Button from "../Button/Button";
import "./SearchBox.css"

function SearchBox({ onProductoEncontrado }) {
    const [codigoProducto, setCodigoProducto] = useState("");
    const [productoEncontrado, setProductoEncontrado] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    const buscarProducto = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${codigoProducto}`);
            if (!response.ok) {
                throw new Error(`Error al buscar el producto: ${response.status}`);
            }
            const data = await response.json();
            // Filtrar solo los campos necesarios y agregar la cantidad y el subtotal
            const producto = {
                codigo: data.codigo,
                nombre: data.nombre,
                precioVenta: data.precioVenta,
                cantidad: cantidad,
                subtotal: data.precioVenta * cantidad,
            };
            setProductoEncontrado(producto);
            // Pasar los detalles del producto encontrado al componente padre (TableSales)
            onProductoEncontrado(producto);
        } catch (error) {
            console.error(error);
            // Manejar el error 
        }
    };

    return (
        <div className="search-box">
            <div className="inputBuscador">
            <CustomInput type="text" value={codigoProducto} placeholder="Producto" onChange={(e) => setCodigoProducto(e.target.value)} />
            <Button onClick={buscarProducto} caption="Buscar"/>
            </div>
            {/* No es necesario mostrar los detalles del producto aquí */}
        </div>
    );
}

export default SearchBox;
