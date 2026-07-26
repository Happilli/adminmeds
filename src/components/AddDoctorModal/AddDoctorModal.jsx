import "./AddDoctorModal.css";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function AddDoctorModal({ onSave, onClose }) {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    date_of_birth: "",
    department: "",
    specialization: "",
    medical_license_number: "",
    years_of_experience: "",
    qualification: "",
    address: "",
    username: "",
    temporary_password: "",
    working_days: [],
    shift: "Morning",
    appointment_duration: 30,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "General Medicine",
    "Emergency",
    "Radiology",
    "Dermatology",
    "Gynecology",
  ];

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleWorkingDay = (day) => {

    setFormData((prev) => {

      const exists = prev.working_days.includes(day);

      return {

        ...prev,

        working_days: exists
          ? prev.working_days.filter((item) => item !== day)
          : [...prev.working_days, day],

      };

    });

  };
  const handleImageChange = (event) => {

  const file = event.target.files[0];

  if (!file) return;

  setFormData((prev) => ({
    ...prev,
    profile_picture: file,
  }));

  setPreviewImage(URL.createObjectURL(file));

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
        className="add-doctor-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="modal-header">

          <h2>Add Doctor</h2>

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
            <div className="doctor-photo-section">

            <div className="doctor-photo-preview">

                <img
                src={
                    previewImage ||
                    "https://ui-avatars.com/api/?name=Doctor&background=EEF2FF&color=4F46E5&size=180"
                }
                alt="Doctor"
                />

            </div>

            <label className="upload-photo-btn">

                Upload Profile Picture

                <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
                />

            </label>

            <small>
                Optional (JPG, PNG)
            </small>

            </div>

          <div className="form-section">

            <h3>Doctor Information</h3>

            <div className="form-grid">

              <div className="form-group">

                <label>First Name</label>

                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Last Name</label>

                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              </div>

              <div className="form-group">

                <label>Date of Birth</label>

                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Department</label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>

                  {departments.map((department) => (

                    <option
                      key={department}
                      value={department}
                    >
                      {department}
                    </option>

                  ))}

                </select>

              </div>

              <div className="form-group">

                <label>Specialization</label>

                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Years of Experience</label>

                <input
                  type="number"
                  min="0"
                  name="years_of_experience"
                  value={formData.years_of_experience}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Qualification</label>

                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group full-width">

                <label>Medical License Number</label>

                <input
                  type="text"
                  name="medical_license_number"
                  value={formData.medical_license_number}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group full-width">

                <label>Address</label>

                <textarea
                  rows="3"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />

              </div>
         </div>
         </div>
        

        <div className="form-section">

          <h3>Account Information</h3>

          <div className="form-grid">

            <div className="form-group">

              <label>Username</label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="off"
                required
              />

            </div>

            <div className="form-group">

              <label>Temporary Password</label>

              <div className="password-input">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="temporary_password"
                  value={formData.temporary_password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {
                    showPassword
                      ? <VisibilityOffOutlinedIcon />
                      : <VisibilityOutlinedIcon />
                  }

                </button>

              </div>

            </div>

          </div>

        </div>

        <div className="form-section">

          <h3>Working Schedule</h3>

          <div className="form-group">

            <label>Working Days</label>

            <div className="working-days">

              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => (

                <label
                  key={day}
                  className="day-checkbox"
                >

                  <input
                    type="checkbox"
                    checked={formData.working_days.includes(day)}
                    onChange={() => handleWorkingDay(day)}
                  />

                  <span>{day}</span>

                </label>

              ))}

            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Shift</label>

              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
              >

                <option>Morning</option>

                <option>Evening</option>

                <option>Full Day</option>

              </select>

            </div>

            <div className="form-group">

              <label>Appointment Duration</label>

              <input
                type="text"
                value={`${formData.appointment_duration} Minutes`}
                disabled
              />

            </div>

          </div>

        </div>

        <div className="modal-footer">

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

            Add Doctor

          </button>

        </div>

      </form>

    </div>

  </div>

);

}

export default AddDoctorModal;