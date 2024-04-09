import React from "react";
import Boton from "../Boton/Boton";
import "./BotonCompras.css"

function BotonCompras () {
    const handleButtonClick = () => {
        alert('¡Botón clickeado!');
      };
    return(
        <>
        <div className="fila">
            <Boton onClick={handleButtonClick} color="#fbff00" caption="Agregar compra"/>
            <Boton onClick={handleButtonClick} color="#ff0000" caption="Cancelar ventas"/>
            <Boton onClick={handleButtonClick} color="#00ff00" caption="Realizar Compra"/>
        </div>
        </>
    )
}

export default BotonCompras;