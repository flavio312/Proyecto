import React from "react";
import styled from "styled-components";
import "./Title.css"

const StyleTitle = styled.h1`
  color: ${(props) => props.color || "#F7B5CD"}; 
  font-weight: bold;
`;

const Title = ({ caption, color, size }) => {
  return <StyleTitle color={color} className={`title ${size}`}>{caption}</StyleTitle>;
};

export default Title;
  