import React from "react";
import CustomInput from "../Input/Input";
import Button from "../Button/Button";
import "./SearchBox.css"; 

function SearchBox(){
    return(
        <div className="search-box"> 
            <CustomInput type="text" placeholder="Buscar.."/>
            <Button caption="Buscar"/>
        </div>
    );
}
export default SearchBox;
