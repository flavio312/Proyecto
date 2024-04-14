import { Link } from "react-router-dom";
import ViewEmployees from "../ViewEmployee/ViewEmployees";
import Header from "../../UI/Header/Header";
import Nav from "../../UI/Nav/Nav";
import Button from "../../UI/Button/Button";
import Footer from "../../UI/Footer/Footer";
import SearchBox from "../../UI/SearchBox/Search-box";
import "./Employee.css"

function Employees() {
  return (
    <>
      <Header />
      <Nav /> <br /><br />
      <div className="search-Box">
        <SearchBox/>
      </div> <br />
      <div className="new-employee-button">
        <Link to="/nuevo-Empleado">
          <Button caption="Agregar empleado"/>
        </Link>
      </div><br />
        <ViewEmployees /><br /><br />
      <Footer/>
    </>
  );
}

export default Employees;
