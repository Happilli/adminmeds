// src/components/AddDoctorModal/AddDoctorModal.jsx
import { useState } from "react";
import { EyesIcon, CameraIcon } from "@phosphor-icons/react";
import Modal from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";

const DEPARTMENTS = ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "General Medicine", "Emergency", "Radiology", "Dermatology", "Gynecology"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const GENDERS = ["Male", "Female", "Other"];
const SHIFTS = ["Morning", "Evening", "Full Day"];
const INITIAL_FORM = {
  first_name: "", last_name: "", email: "", phone: "", gender: "", date_of_birth: "",
  department: "", specialization: "", medical_license_number: "", years_of_experience: "",
  qualification: "", address: "", username: "", temporary_password: "",
  working_days: [], shift: "",
};

const inputClass = "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full cursor-pointer";
const textInputClass = "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full";

function AddDoctorModal({ onSave, onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const setField = (name) => (value) => setFormData((prev) => ({ ...prev, [name]: value }));

  const handleWorkingDay = (day) =>
    setFormData((prev) => ({
      ...prev,
      working_days: prev.working_days.includes(day)
        ? prev.working_days.filter((d) => d !== day)
        : [...prev.working_days, day],
    }));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, profile_picture: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal onClose={onClose} maxWidth="max-w-4xl" showHeader={false}>
      <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-9">
        <div className="flex flex-col items-center">
          <label
            className="group relative w-32 h-32 overflow-hidden border-4 border-secondary-container mb-4 cursor-pointer"
            style={{ borderRadius: "46% 54% 61% 39% / 55% 43% 57% 45%" }}
          >
            <img
              src={previewImage}
              alt="Doctor preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors">
              <CameraIcon size={26} weight="fill" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </label>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-on-surface-variant mb-5 uppercase tracking-wide">Doctor Information</h3>
          <div className="grid grid-cols-2 gap-5">
            <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required className={textInputClass} />
            <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required className={textInputClass} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className={textInputClass} />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className={textInputClass} />
            <Dropdown options={GENDERS} value={formData.gender} onChange={setField("gender")} placeholder="Gender" />
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              onClick={(e) => e.currentTarget.showPicker?.()}
              required
              className={`${inputClass} [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full`}
            />
            <Dropdown options={DEPARTMENTS} value={formData.department} onChange={setField("department")} placeholder="Department" />
            <input name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required className={textInputClass} />
            <input type="number" min="0" name="years_of_experience" placeholder="Years of Experience" value={formData.years_of_experience} onChange={handleChange} required className={textInputClass} />
            <input name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required className={textInputClass} />
            <input name="medical_license_number" placeholder="Medical License Number" value={formData.medical_license_number} onChange={handleChange} required className={`${textInputClass} col-span-2`} />
            <textarea rows="3" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className={`${textInputClass} col-span-2 h-auto py-3 resize-y`} />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-on-surface-variant mb-5 uppercase tracking-wide">Account Information</h3>
          <div className="grid grid-cols-2 gap-5">
            <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} autoComplete="off" required className={textInputClass} />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="temporary_password"
                placeholder="Temporary Password"
                value={formData.temporary_password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                className={`${textInputClass} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                <EyesIcon size={20} weight="fill" className={`transition-transform duration-300 ${showPassword ? "-scale-x-100" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-on-surface-variant mb-5 uppercase tracking-wide">Working Schedule</h3>
          <div className="flex flex-wrap gap-3 mb-5">
            {WEEKDAYS.map((day) => (
              <label key={day} className="flex items-center gap-2 bg-surface-container-high border border-outline-variant px-3.5 py-2 rounded-lg cursor-pointer text-sm text-on-surface">
                <input type="checkbox" checked={formData.working_days.includes(day)} onChange={() => handleWorkingDay(day)} className="accent-primary cursor-pointer" />
                {day}
              </label>
            ))}
          </div>
          <div className="max-w-xs">
            <Dropdown options={SHIFTS} value={formData.shift} onChange={setField("shift")} placeholder="Shift" />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-5 border-t border-outline-variant">
          <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors cursor-pointer">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors cursor-pointer">
            Add Doctor
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddDoctorModal;