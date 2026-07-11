import "./LogoutConfirmationModal.css";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CloseIcon from "@mui/icons-material/Close";

function LogoutConfirmationModal({ onConfirm, onClose }) {

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="logout-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="modal-header">

          <h2>Logout</h2>

          <button
            type="button"
            className="close-btn"
            onClick={onClose}
          >
            <CloseIcon />
          </button>

        </div>

        <div className="logout-content">

          <div className="logout-icon">

            <LogoutOutlinedIcon />

          </div>

          <h3>Are you sure?</h3>

          <p>
            You are about to logout from your account.
            You'll need to sign in again to continue using MediSync.
          </p>

        </div>

        <div className="modal-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="logout-btn"
            onClick={onConfirm}
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}

export default LogoutConfirmationModal;