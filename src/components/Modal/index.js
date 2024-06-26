import React from "react";
import Modal from "@mui/material/Modal";

const index = ({ isOpen, handleClose, handleConfirm }) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <span>test</span>
    </Modal>
  );
};

export default index;
