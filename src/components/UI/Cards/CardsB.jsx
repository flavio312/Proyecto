import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../Title/Title";
import cardDataB from "../../../utils/cardDataB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cards.css"

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  color: pink;
`;

function CardsB() {
  return (
    <CardsContainer>
      {cardDataB.map((card, index) => (
        <Link className="SingleCards" key={index} to={card.to}>
          <div className="card-content">
          {card.icon && <FontAwesomeIcon icon={card.icon} className="card-icon"/>}
          <CardTitle caption={card.title} />
          </div>
        </Link>
      ))}
    </CardsContainer>
  );
}


export default CardsB;
