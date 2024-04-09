import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Date from "../../../utils/FechaActual"

const FooterContainer = styled.footer`
  background-color: #231F20;
  color: white;
  border: 5px solid #f150b4;
  padding: 10px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`;

const Footer = () => {
  const fecha = Date(); 

  return (
    <FooterContainer>
      <p>{fecha}</p>
      <p>Copyright © 2024 Novedades Diaz. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
