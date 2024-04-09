import React from "react";
import Header from "../../components/UI/Header/Header";
import Nav from "../../components/UI/Nav/Nav";
import Footer from "../../components/UI/Footer/Footer";
import Form from "../../components/pages/Form/Form";

function NuevoProducto (){
    return(
        <>
            <Header/>
            <Nav/> 
            <br />
            <Form/> <br />
            <Footer/>
        </>
    );
}

export default NuevoProducto;
