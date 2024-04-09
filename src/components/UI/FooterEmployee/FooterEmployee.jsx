import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";

const FooterEmploy = styled.footer`
  background-color: #66f8fd;
  padding: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterEmployee = () => {
  return (
    <div>
      <FooterEmploy>
      <Title caption="Empleado" color="#000000" /> 
      <Title caption="Turno" color="#000000" /> 
      <p>Copyright © 2024 Novedades Diaz. All rights reserved.</p>
    </FooterEmploy>
    </div>
  );
};

export default FooterEmployee;
