import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: #f047af;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = ({ onClick, caption }) => {
  return <StyleButton onClick={onClick}>{caption}</StyleButton>;
};

export default Button;


