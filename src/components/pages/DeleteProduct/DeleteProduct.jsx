import CustomInput from "../../UI/Input/Input";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import "./DeleteProduct.css"

function DeleteEmployee (){
    return (
        <div className="delete-product-container">
            <div className="delete-product-box">
                <Text text="Eliminar Producto" size="large"/> <br />
                <Text text="Ingrese el nombvre del producto a eliminar" size="medium"/>
                <CustomInput type="text" placeholder="producto"/>
                <Button caption="Eliminar"/>
            </div>
        </div>
    );
}

export default DeleteEmployee;