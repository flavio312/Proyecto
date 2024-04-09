import React from "react";
import { Modal} from "react-bootstrap";
import Button from "../Button/Button";

const EmployeeModal = ({ showModal, onClose, children }) => {
  return (
    showModal && (
      <div className="modal-container">
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content">
          <Modal.Dialog>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose} variant="secondary" caption="Cerrar"/>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    )
  );
};

export default EmployeeModal;
