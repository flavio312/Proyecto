import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Title/Title";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 10px;
  color: pink;
`;

const EmployeeCard = ({ card, onClick }) => {
  return (
    <CardContainer className="SingleCards" onClick={() => onClick(card)}>
      <div className="card-content">
        {card.icon && <FontAwesomeIcon icon={card.icon} className="card-icon" />}
        <CardTitle caption={card.title} />
      </div>
    </CardContainer>
  );
};

export default EmployeeCard;
