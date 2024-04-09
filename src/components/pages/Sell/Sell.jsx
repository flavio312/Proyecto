import Header from "../../UI/Header/Header";
import SearchBox from "../../UI/SearchBox/Search-box";
import Navigation from "../../UI/Navigation/Navigation";
import TableSales from "../../UI/TableSale/TableSales";
import FooterEmployee from "../../UI/FooterEmployee/FooterEmployee";
import Date from "../../../utils/FechaActual";
import "./Sell.css";
function Sell () {
    const fecha = Date();
    return(
        <>
        <Header/>
        <Navigation/> <br />
        <p>{fecha}</p>
        <div className="search"><SearchBox/><br /><br /></div>
        <TableSales/> <br />
        <FooterEmployee/>
        </>
    );
}

export default Sell;