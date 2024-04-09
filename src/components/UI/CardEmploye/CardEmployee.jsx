import React, { useState } from "react";
import { faUser, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import EmployeeModal from "./EmployeeModal";
import AddEmployee from "../../pages/AddEmployee/AddEmployee";
import EmployeeCard from "./EmployeeCard";
import DeleteEmployee from "../DeleteEmployee/DeleteEmployee";

const CardEmployee = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const renderCardContent = () => {
    if (!selectedCard) return null;

    switch (selectedCard.to) {
      case "/nuevo-Empleado":
        return <AddEmployee />;
      case "/eliminar-Empleado":
        return <DeleteEmployee />;
      default:
        return null;
    }
  };

  return (
    <>
      {[
        { title: "Nuevo empleado", to: "/nuevo-Empleado", icon: faUser },
        { title: "Eliminar Empleado", to: "/eliminar-Empleado", icon: faDeleteLeft }
      ].map((card, index) => (
        <EmployeeCard key={index} card={card} onClick={handleCardClick} />
      ))}
      <EmployeeModal showModal={showModal} onClose={() => setShowModal(false)}>
        {renderCardContent()}
      </EmployeeModal>
    </>
  );
};

export default CardEmployee;
