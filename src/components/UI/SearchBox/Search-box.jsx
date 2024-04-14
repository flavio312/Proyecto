import React, { useState } from "react";
import CustomInput from "../Input/Input";
import Button from "../Button/Button";

function SearchBox() {
    const [codigoProducto, setCodigoProducto] = useState("");
    const [productoEncontrado, setProductoEncontrado] = useState(null);

    const buscarProducto = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${codigoProducto}`);
            if (!response.ok) {
                throw new Error(`Error al buscar el producto: ${response.status}`);
            }
            const data = await response.json();
            setProductoEncontrado(data);
        } catch (error) {
            console.error(error);
            // Manejar el error
        }
    };

    return (
        <div>
            <CustomInput type="text" value={codigoProducto} onChange={(e) => setCodigoProducto(e.target.value)} />
            <Button onClick={buscarProducto} caption="Buscar"/>
            {productoEncontrado && (
                <div>
                    <p>Código: {productoEncontrado.codigo}</p>
                    <p>Nombre: {productoEncontrado.nombre}</p>
                    <p>Precio: {productoEncontrado.precio}</p>
                    <p>Cantidad: {productoEncontrado.cantidad}</p>
                </div>
            )}
        </div>
    );
}

export default SearchBox;
