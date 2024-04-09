import Header from "../../UI/Header/Header";
import Nav from "../../UI/Nav/Nav";
import SearchBox from "../../UI/SearchBox/Search-box";
import Button from "../../UI/Button/Button";
import Date from "../../../utils/FechaActual"
import Footer from "../../UI/Footer/Footer";
import ConsultProduct from "../ConsultProduct/ConsultProduct";
import "./Product.css"
import { Link } from "react-router-dom";

function Products () {
    const fecha = Date();
    return(
        <>
        <Header/>
        <Nav/>
        <br />
        <div className="search-Box">
        <SearchBox/>
        </div>
        <div className="new-product-button">
        <p>{fecha}</p>
        <Link to="/nuevo-producto">
            <Button caption="Nuevo producto"/>
        </Link>
        </div> <br /><br />
        <ConsultProduct/> <br /><br /><br />
        <Footer/>
        </>  
    );
};
export default Products;
