import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Text from "../../UI/Text/Text";
import CustomInput from "../../UI/Input/Input";
import "./Form.css";

function Form({ onAdd }) {
    const [formData, setFormData] = useState({
        clave: "",
        nombre: "",
        cantidad: "",
        precioCompra: "",
        precioVenta: "",
        seccion: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData); 
        setFormData({
            clave: "",
            nombre: "",
            cantidad: "",
            precioCompra: "",
            precioVenta: "",
            seccion: ""
        });
    };

    return (
        <div className="form">
            <Text text="Innovación y control al alcance de tu mano" size="large" /> <br />
            <form onSubmit={handleSubmit}>
                <Text text="Clave del producto" size="medium" />
                <CustomInput type="number" name="clave" value={formData.clave} onChange={handleChange} placeholder="Clave"/>
                <Text text="Nombre del producto" size="medium" />
                <CustomInput type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre del producto"/>
                <Text text="Cantidad" size="medium" />
                <CustomInput type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} placeholder="Cantidad"/>
                <Text text="Precio de compra" size="medium" />
                <CustomInput type="number" name="precioCompra" value={formData.precioCompra} onChange={handleChange} placeholder="Precio de compra"/>
                <Text text="Precio de venta" size="medium" />
                <CustomInput type="number" name="precioVenta" value={formData.precioVenta} onChange={handleChange} placeholder="Precio de venta"/>
                <Text text="Sección" size="medium" />
                <CustomInput type="text" name="seccion" value={formData.seccion} onChange={handleChange} placeholder="Sección"/>
                <Button type="submit" caption="Agregar Producto" />
            </form>
        </div>
    );
}

export default Form;
