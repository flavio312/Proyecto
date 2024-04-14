import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Text from "../../UI/Text/Text";
import CustomInput from "../../UI/Input/Input";
import "./Form.css";

const Form = () => {
    const [registro, setRegistro] = useState({
        codigo: '',
        nombre: '',
        stock: '',
        precioCompra: '',
        precioVenta: '',
        seccion: ''
    });

    const handleRegistroChange = (e) => {
        const { name, value } = e.target;
        setRegistro({ 
            ...registro, 
            [name]: value 
        });
    };

    const agregar = async (credentials) => {
        try {
            const response = await fetch('http://localhost:8080/api/productsAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            console.log(data);
            // Mostrar una alerta de éxito
            alert("El producto fue creado con éxito");
            setRegistro({
                codigo: '',
                nombre: '',
                stock: '',
                precioCompra: '',
                precioVenta: '',
                seccion: ''
            });
        } catch (error) {
            console.error('Error al enviar datos de registro:', error);
            alert("Error al enviar datos de registro");
        }
    };
    

    const handleRegistroSubmit = async (e) =>{
        e.preventDefault();
        await agregar(registro);
    }

    return (
        <div className="form">
            <Text text="Innovación y control al alcance de tu mano" size="large" /> <br />
            <form  onSubmit={handleRegistroSubmit}>
                <Text text="Codigo" size="medium"/>
                <CustomInput type="number" name="codigo" placeholder="codigo" value={registro.codigo} onChange={handleRegistroChange}/>
                <Text text="Nombre" size="medium"/>
                <CustomInput type="text" name="nombre" placeholder="nombre" value={registro.nombre} onChange={handleRegistroChange} />
                <Text text="Cantidad" size="medium"/>
                <CustomInput type="number" name="stock" placeholder="stock " value={registro.stock} onChange={handleRegistroChange} />
                <Text text="Precio de compra" size="medium"/>
                <CustomInput type="number" name="precioCompra" placeholder="Precio de compra" value={registro.precioCompra} onChange={handleRegistroChange} />
                <Text text="Precio de venta" size="medium"/>
                <CustomInput type="number" name="precioVenta" placeholder="Precio de compra" value={registro.precioVenta} onChange={handleRegistroChange} />
                <Text text="Sección" size="medium"/>
                <CustomInput type="text" name="seccion" placeholder="seccion" value={registro.seccion} onChange={handleRegistroChange} />
                <Button type="submit" caption="Agregar"/>
            </form>
        </div>
    );
}

export default Form;
