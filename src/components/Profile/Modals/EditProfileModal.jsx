import "./EditProfileModal.css";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

function EditProfileModal({ profile, onSave, onClose }) {

  const [formData, setFormData] = useState({
    full_name: profile.full_name,
    email: profile.email,
    phone: profile.phone,
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const updatedProfile = {
      ...profile,
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
    };

    onSave(updatedProfile);

  };

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="edit-profile-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="modal-header">

          <h2>Edit Profile</h2>

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

            <label htmlFor="full_name">
              Full Name
            </label>

            <input
              id="full_name"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

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
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default EditProfileModal;