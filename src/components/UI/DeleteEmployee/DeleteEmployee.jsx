import CustomInput from "../Input/Input";
import Text from "../Text/Text";
import Button from "../Button/Button";
import "./DeleteEmployee.css";

function DeleteEmployee (){
    return (
        <div className="delete-employee-container"> 
            <div className="delete-employee-box"> 
                <Text text="Eliminar Empleado" size="large" /><br />
                <Text text="Ingrese el nombre del usuario a eliminar" size="medium" />
                <CustomInput type="text" placeholder="Usuario" />
                <Button caption="Eliminar" />
            </div>
        </div>
    );
}

export default DeleteEmployee;

