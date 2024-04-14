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
            <Boton onClick={handleButtonClick} color="#fbff00" caption="Agregar venta"/>
            <Boton onClick={handleButtonClick} color="#f43535" caption="Cancelar ventas"/>
            <Boton onClick={handleButtonClick} color="#52ee52" caption="Realizar venta"/>
        </div>
        </>
    )
}

export default BotonCompras;