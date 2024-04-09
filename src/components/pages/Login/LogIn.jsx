import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../UI/Input/Input";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "usuario" && password === "prueba123") {
            console.log("Inicio de sesión exitoso");
            navigate("/menu");
        } else {
            alert("Credenciales invalidas");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <Text text="Bienvenido a bordo, tu jornada comienza ahora" size="large"/> <br /> <br />
                <Text text="Nombre del usuario" size="medium"/>
                <CustomInput type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                <Text text="Contraseña" size="medium"/>
                <CustomInput type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button caption="Ingresar" onClick={handleSubmit} />
            </div>
            <div className="login-image">
                <img src="/novedades.jpg" alt="Imagen" />
            </div>
        </div>
    );
}

export default Login;
