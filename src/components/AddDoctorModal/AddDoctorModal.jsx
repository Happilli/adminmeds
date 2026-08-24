// src/components/AddDoctorModal/AddDoctorModal.jsx

import { useState } from "react";

import { EyesIcon, CameraIcon } from "@phosphor-icons/react";

import Modal from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";

const DEPARTMENTS = [
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

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  department: "",
  speciality: "",
  bio: "",
  address: "",
  license_number: "",
  years_experience: "",
  password: "",
  license_photo: null,
};

const inputClass =
  "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full";

const textInputClass =
  "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full";

function AddDoctorModal({ onSave, onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setField = (name) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLicensePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      license_photo: file,
    }));

    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <Modal
      onClose={onClose}
      maxWidth="max-w-4xl"
      showHeader={false}
    >
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-9"
      >

        {/* =========================
            DOCTOR INFORMATION
        ========================== */}

        <div>
          <h3 className="text-sm font-semibold text-on-surface-variant mb-5 uppercase tracking-wide">
            Doctor Information
          </h3>

          <div className="grid grid-cols-2 gap-5">

            {/* Full Name */}

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={textInputClass}
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={textInputClass}
            />

            {/* Phone */}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={textInputClass}
            />

            {/* Department */}

            <Dropdown
              options={DEPARTMENTS}
              value={formData.department}
              onChange={setField("department")}
              placeholder="Department"
            />

            {/* Speciality */}

            <input
              name="speciality"
              placeholder="Speciality"
              value={formData.speciality}
              onChange={handleChange}
              required
              className={textInputClass}
            />

            {/* Years Experience */}

            <input
              type="number"
              min="0"
              name="years_experience"
              placeholder="Years of Experience"
              value={formData.years_experience}
              onChange={handleChange}
              required
              className={textInputClass}
            />

            {/* Bio */}

            <textarea
              rows="4"
              name="bio"
              placeholder="Doctor Bio"
              value={formData.bio}
              onChange={handleChange}
              required
              className={`${textInputClass} col-span-2 h-auto py-3 resize-y`}
            />

            {/* Address */}

            <textarea
              rows="3"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className={`${textInputClass} col-span-2 h-auto py-3 resize-y`}
            />
          </div>
        </div>

        {/* =========================
            LICENSE INFORMATION
        ========================== */}

        <div>
          <h3 className="text-sm font-semibold text-on-surface-variant mb-5 uppercase tracking-wide">
            License Information
          </h3>

          <div className="grid grid-cols-2 gap-5">

            {/* License Number */}

            <input
              name="license_number"
              placeholder="Medical License Number"
              value={formData.license_number}
              onChange={handleChange}
              required
              className={`${textInputClass} col-span-2`}
            />

            {/* License Photo */}

            <div className="col-span-2">

              <label className="block text-sm font-medium text-on-surface mb-2">
                Medical License Photo
              </label>

              <div className="flex items-center gap-5">

                <label
                  className="group relative w-32 h-32 overflow-hidden border-4 border-secondary-container cursor-pointer flex-shrink-0"
                  style={{
                    borderRadius:
                      "46% 54% 61% 39% / 55% 43% 57% 45%",
                  }}
                >

                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="License preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface-container-high">
                      <CameraIcon
                        size={28}
                        weight="fill"
                        className="text-on-surface-variant"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors">
                    <CameraIcon
                      size={26}
                      weight="fill"
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    hidden
                    onChange={handleLicensePhotoChange}
                    required
                  />

                </label>

                <div className="text-sm text-on-surface-variant">
                  <p className="font-medium text-on-surface">
                    Upload license document
                  </p>

                  <p className="mt-1">
                    JPG, JPEG, PNG or WEBP
                  </p>

                  <p>
                    Maximum size: 5MB
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =========================
            ACCOUNT INFORMATION
        ========================== */}

        <div>
          <h3 className="text-sm font-semibold text-on-surface-variant mb-5 uppercase tracking-wide">
            Account Information
          </h3>

          <div className="grid grid-cols-2 gap-5">

            {/* Password */}

            <div className="relative col-span-2">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Doctor Password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                className={`${textInputClass} pr-12`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                <EyesIcon
                  size={20}
                  weight="fill"
                  className={`transition-transform duration-300 ${
                    showPassword ? "-scale-x-100" : ""
                  }`}
                />
              </button>

            </div>
          </div>
        </div>

        {/* =========================
            ACTIONS
        ========================== */}

        <div className="flex justify-end gap-4 pt-5 border-t border-outline-variant">

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors cursor-pointer"
          >
            Add Doctor
          </button>

        </div>

      </form>
    </Modal>
  );
}

export default AddDoctorModal;