import React from "react";
import CustomInput from "../Input/Input";
import Title from "../Title/Title";
import fechaActual from "../../../utils/FechaActual";
import "./ShiftControl.css"

function ShiftControl () {
    const fecha = fechaActual();
    return(
        <>
        <div className="control">
            <Title caption="Horario" color="#000000"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Title caption="Entrada" color="#000000"/>&nbsp;
            <CustomInput type="time" placeholder="Entrada"/>
            <Title caption="Salida" color="#000000"/>&nbsp;
            <CustomInput type="time" placeholder="Salida"/>
            <Title caption="Turno" color="#000000"/>
            <p className="end">{fecha}</p>
        </div>        
        </>
    );
}

export default ShiftControl;