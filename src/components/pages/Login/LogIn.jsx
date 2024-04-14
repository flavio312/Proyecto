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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(` usuario: ${username}`);
        if (username === "usuario" && password === "prueba123") {
            navigate("/menu");
            return;
        }
        // Si no coincide con ningún usuario, muestra un mensaje de error
        alert("Credenciales inválidas");
      
    //     try {
    //         // Verificar si las credenciales son para el empleado
    //         const response = await fetch('http://localhost:8080/api/auth/loginEmple', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ username, password })
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             if (data.userType === 'empleado') {
    //                 navigate("/menu");
    //                 return;
    //             }
    //         }
    //         // Si no es un empleado o las credenciales son incorrectas, verifica si es el administrador
       
    //     } catch (error) {
    //         console.error('Error al iniciar sesión:', error.message);
    //         alert("Credenciales inválidas");
    //     }
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
