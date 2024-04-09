import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../Title/Title";
import cardData from "../../../utils/cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cards.css"

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 8%;
  color: pink;
`;

function CardsA() {
  return (
    <CardsContainer>
      {cardData.map((card, index) => (
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

export default CardsA;
