import React, { useState } from "react";
import CustomInput from "../../UI/Input/Input";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import "./AddEmployee.css";

function AddEmployee() {
    const [registro, setRegistro] = useState({
        username: '',
        turno: '',
        numCont: '',
        password: '',
        clave: ''
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
          const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error al enviar datos de registro:', error);
        }
    };

    const handleRegistroSubmit = async (e) =>{
        e.preventDefault();
        await agregar(registro);
    }

    return (
        <div className="form">
             <Text text="Expande tu equipo, incorpora un nuevo talento" size="large"/><br />
            <form onSubmit={handleRegistroSubmit}> 
            <Text text="Nombre del usuario" size="medium"/>
            <CustomInput type="text" name="username" placeholder="Usuario" value={registro.username} onChange={handleRegistroChange}/>
            <Text text="Turno" size="medium"/>
            <CustomInput type="text" name="turno" placeholder="Turno" value={registro.turno} onChange={handleRegistroChange}/>
            <Text text="Numero de contacto" size="medium"/>
            <CustomInput type="number" name="numCont" placeholder="telefono" value={registro.numCont} onChange={handleRegistroChange}/>
            <Text text="Contraseña" size="medium"/>
            <CustomInput type="password" name="password" placeholder="Contraseña" value={registro.password} onChange={handleRegistroChange}/>
            <Text text="Clave" size="medium"/>
            <CustomInput type="number" name="clave" placeholder="Clave" value={registro.clave} onChange={handleRegistroChange} />
            <Button caption="Agregar empleado" type="submit"/>
            </form>
        </div>
    );
}

export default AddEmployee;
