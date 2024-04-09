import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import Button from "../Button/Button";
import Title from "../Title/Title"
import "./Header.css"

const Logo = styled.img`
  width: 200px;
  margin-right: 10px;
`;

const RightAlignedContent = styled.div`
  margin-left: auto;
`;

function Header() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    navigate("/")
    // Aquí puedes agregar lógica para limpiar la sesión, como borrar el token JWT del almacenamiento local.
    // Luego, llamas a la función `onLogout` para notificar al componente padre que se ha cerrado la sesión.
  };

  return (
    <>
    <div className="header">
        <Logo src="/Diaz.jpg" alt="Logo" />
        <Title size="exlarge" caption="Novedades Diaz" color="#F7B5CD"/> 
        <RightAlignedContent>
          <Button caption="Salir" onClick={handleLogout} />
        </RightAlignedContent>
    </div>
    </>
  );
}

export default Header;
