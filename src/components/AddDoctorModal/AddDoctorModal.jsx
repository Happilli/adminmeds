import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import Modal from "../Modal/Modal";

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

  const inputClass =
    "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors";
  const labelClass = "text-sm font-medium text-on-surface-variant mb-2 block";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    setFormData((prev) => ({ ...prev, profile_picture: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <Modal title="Add Doctor" onClose={onClose} maxWidth="max-w-4xl">
      <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-9">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary-container mb-4">
            <img
              src={
                previewImage ||
                "https://ui-avatars.com/api/?name=Doctor&background=1c2116&color=a2ee4f&size=180"
              }
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <label className="bg-primary text-on-primary px-4 py-2.5 rounded-lg cursor-pointer font-medium text-sm hover:bg-primary-fixed-dim transition-colors">
            Upload Profile Picture
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </label>
          <small className="text-on-surface-variant text-xs mt-2">Optional (JPG, PNG)</small>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-on-surface mb-5 border-l-4 border-primary pl-3">
            Doctor Information
          </h3>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>First Name</label>
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Last Name</label>
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className={`${inputClass} w-full cursor-pointer`}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Date of Birth</label>
              <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Department</label>
              <select name="department" value={formData.department} onChange={handleChange} required className={`${inputClass} w-full cursor-pointer`}>
                <option value="">Select Department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Specialization</label>
              <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Years of Experience</label>
              <input type="number" min="0" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Qualification</label>
              <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div className="col-span-2">
              <label className={labelClass}>Medical License Number</label>
              <input type="text" name="medical_license_number" value={formData.medical_license_number} onChange={handleChange} required className={`${inputClass} w-full`} />
            </div>

            <div className="col-span-2">
              <label className={labelClass}>Address</label>
              <textarea rows="3" name="address" value={formData.address} onChange={handleChange} className={`${inputClass} w-full h-auto py-3 resize-y`} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-on-surface mb-5 border-l-4 border-primary pl-3">
            Account Information
          </h3>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} autoComplete="off" required className={`${inputClass} w-full`} />
            </div>

            <div>
              <label className={labelClass}>Temporary Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="temporary_password"
                  value={formData.temporary_password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  className={`${inputClass} w-full pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {showPassword ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-on-surface mb-5 border-l-4 border-primary pl-3">
            Working Schedule
          </h3>

          <div className="mb-5">
            <label className={labelClass}>Working Days</label>
            <div className="flex flex-wrap gap-3">
              {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                <label
                  key={day}
                  className="flex items-center gap-2 bg-surface-container-high border border-outline-variant px-3.5 py-2 rounded-lg cursor-pointer text-sm text-on-surface"
                >
                  <input
                    type="checkbox"
                    checked={formData.working_days.includes(day)}
                    onChange={() => handleWorkingDay(day)}
                    className="accent-primary cursor-pointer"
                  />
                  <span>{day}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Shift</label>
              <select name="shift" value={formData.shift} onChange={handleChange} className={`${inputClass} w-full cursor-pointer`}>
                <option>Morning</option>
                <option>Evening</option>
                <option>Full Day</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Appointment Duration</label>
              <input type="text" value={`${formData.appointment_duration} Minutes`} disabled className={`${inputClass} w-full bg-surface-container-high text-on-surface-variant`} />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-5 border-t border-outline-variant">
          <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors">
            Add Doctor
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddDoctorModal;