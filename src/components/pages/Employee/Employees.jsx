import ViewEmployees from "../ViewEmployee/ViewEmployees";
import Header from "../../UI/Header/Header";
import Nav from "../../UI/Nav/Nav";
import CardEmployee from "../../UI/CardEmploye/CardEmployee";
import Footer from "../../UI/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function Employees() {
  return (
    <>
      <Header />
      <Nav /> <br />
      <Container>
        <CardEmployee /> 
        <ViewEmployees />
      </Container>
      <Footer/>
    </>
  );
}

export default Employees;
