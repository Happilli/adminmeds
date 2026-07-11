import "./ChangePasswordModal.css";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function ChangePasswordModal({ onSave, onClose }) {

  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const toggleVisibility = (field) => {

    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (formData.new_password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (formData.new_password !== formData.confirm_password) {
      alert("Passwords do not match.");
      return;
    }

    onSave(formData);

  };

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="change-password-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="modal-header">

          <h2>Change Password</h2>

          <button
            type="button"
            className="close-btn"
            onClick={onClose}
          >
            <CloseIcon />
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Current Password</label>

            <div className="password-input">

              <input
                type={showPassword.current ? "text" : "password"}
                name="current_password"
                value={formData.current_password}
                onChange={handleChange}
                required
                
              />

              <button
                type="button"
                onClick={() => toggleVisibility("current")}
              >
                {showPassword.current ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </button>

            </div>

          </div>

          <div className="form-group">

            <label>New Password</label>

            <div className="password-input">

              <input
                type={showPassword.new ? "text" : "password"}
                name="new_password"
                value={formData.new_password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => toggleVisibility("new")}
              >
                {showPassword.new ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </button>

            </div>

            <small>Password must contain at least 8 characters.</small>

          </div>

          <div className="form-group">

            <label>Confirm Password</label>

            <div className="password-input">

              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => toggleVisibility("confirm")}
              >
                {showPassword.confirm ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </button>

            </div>

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
              type="submit"
              className="save-btn"
            >
              Update Password
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default ChangePasswordModal;