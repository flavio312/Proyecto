import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.color || '#007bff'};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

function Boton({ onClick, color, caption }) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {caption}
    </StyledButton>
  );
}

export default Boton;
