import { useState } from "react";
import "./AddDoctorModal.css";
import CloseIcon from "@mui/icons-material/Close";

function AddDoctorModal({ open, onClose }) {

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        address: "",
        profilePicture: null,

    });

    if (!open) return null;

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        if (name === "profilePicture") {

            setFormData((prev) => ({
                ...prev,
                profilePicture: files[0],
            }));

            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = () => {

        console.log(formData);

        // Future:
        // POST /api/doctors

        onClose();

    };

    return (

        <div className="modal-overlay">

            <div className="doctor-modal">

                {/* ================= HEADER ================= */}

                <div className="modal-header">

                    <div>

                        <h2>Add New Doctor</h2>

                        <p>
                            Register a new doctor in your hospital.
                        </p>

                    </div>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>

                </div>

                {/* ================= BODY ================= */}

                <div className="modal-body">

                    <div className="form-section">

                        <h3>Personal Information</h3>

                        <p className="section-description">
                            Enter the doctor's personal details.
                        </p>

                        <div className="form-grid">

                            {/* First Name */}

                            <div className="form-group">

                                <label>
                                    First Name <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter first name"
                                />

                            </div>

                            {/* Last Name */}

                            <div className="form-group">

                                <label>
                                    Last Name <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter last name"
                                />

                            </div>

                            {/* Email */}

                            <div className="form-group">

                                <label>
                                    Email <span>*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                />

                            </div>

                            {/* Phone */}

                            <div className="form-group">

                                <label>
                                    Phone Number <span>*</span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                />

                            </div>

                            {/* Gender */}

                            <div className="form-group">

                                <label>
                                    Gender <span>*</span>
                                </label>

                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>

                            {/* Date of Birth */}

                            <div className="form-group">

                                <label>
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* Address */}

                            <div className="form-group full-width">

                                <label>
                                    Address
                                </label>

                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter doctor's address"
                                />

                            </div>

                            {/* Profile Picture */}

                            <div className="form-group full-width">

                                <label>
                                    Profile Picture
                                </label>

                                <div className="file-upload">

                                    <input
                                        type="file"
                                        name="profilePicture"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ================= FOOTER ================= */}

                <div className="modal-footer">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="save-btn"
                        onClick={handleSubmit}
                    >
                        Continue
                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddDoctorModal;