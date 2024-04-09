import React, { useState } from "react";
import CustomInput from "../../UI/Input/Input";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import "./AddEmployee.css";

function AddEmployee() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        } else {
            // Aquí puedes enviar los datos del formulario si la validación pasa
            setErrorMessage("");
        }
    };

    return (
        <div className="form">
            <Text text="Expande tu equipo, incorpora un nuevo talento" size="large"/><br />
            <Text text="ID" size="medium"/>
            <CustomInput type="number" placeholder="ID" />
            <Text text="Nombre del usuario" size="medium"/>
            <CustomInput type="text" placeholder="Usuario"/>
            <Text text="Contraseña" size="medium"/>
            <CustomInput type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange}/>
            <Text text="Confirmar Contraseña" size="medium"/>
            <CustomInput type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
            {errorMessage && <Text text={errorMessage} size="small" color="red"/>}
            <Text text="Turno" size="medium"/>
            <CustomInput type="text" placeholder="Turno"/>
            <Text text="Numero de contacto" size="medium"/>
            <CustomInput type="number" placeholder="telefono"/>
            <Button caption="Agregar empleado" onClick={handleSubmit}/>
        </div>
    );
}

export default AddEmployee;
