import { useState } from "react";
import { EyesIcon } from "@phosphor-icons/react";
import Modal from "../../Modal/Modal";

const inputClass = "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full pr-12";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
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

  const fields = [
    { key: "current", name: "current_password", placeholder: "Current Password" },
    { key: "new", name: "new_password", placeholder: "New Password" },
    { key: "confirm", name: "confirm_password", placeholder: "Confirm Password" },
  ];

  return (
    <Modal onClose={onClose} showHeader={false}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {fields.map((field) => (
          <div key={field.key} className="relative">
            <input
              type={showPassword[field.key] ? "text" : "password"}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => toggleVisibility(field.key)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              <EyesIcon size={20} weight="fill" className={`transition-transform duration-300 ${showPassword[field.key] ? "-scale-x-100" : ""}`} />
            </button>
          </div>
        ))}

        <div className="flex justify-end gap-4 pt-2">
          <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors cursor-pointer">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors cursor-pointer">
            Update Password
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ChangePasswordModal;