import "./HospitalInformationModal.css";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

function HospitalInformationModal({
  hospital,
  onSave,
  onClose,
}) {

  const [formData, setFormData] = useState({
    hospital_name: hospital.hospital_name,
    registration_number: hospital.registration_number,
    hospital_email: hospital.hospital_email,
    hospital_phone: hospital.hospital_phone,
    website: hospital.website,
    address: hospital.address,
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

    onSave(formData);

  };

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="hospital-information-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="modal-header">

          <h2>Hospital Information</h2>

          <button
            type="button"
            className="close-btn"
            onClick={onClose}
          >
            <CloseIcon />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >

          <div className="form-group">

            <label>Hospital Name</label>

            <input
              type="text"
              name="hospital_name"
              value={formData.hospital_name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Registration Number</label>

            <input
              type="text"
              name="registration_number"
              value={formData.registration_number}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Hospital Email</label>

            <input
              type="email"
              name="hospital_email"
              value={formData.hospital_email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Hospital Phone</label>

            <input
              type="text"
              name="hospital_phone"
              value={formData.hospital_phone}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Website (Optional)</label>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
            />

          </div>

          <div className="form-group">

            <label>Address</label>

            <textarea
              name="address"
              rows="3"
              value={formData.address}
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

export default HospitalInformationModal;