import React from "react";
import "./ConfirmationDialog.css";

const ConfirmationDialog = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="confirmation-dialog-overlay">
      <div className="confirmation-dialog">
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this recipe?</p>
        <div className="confirmation-buttons">
          <button className="confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;