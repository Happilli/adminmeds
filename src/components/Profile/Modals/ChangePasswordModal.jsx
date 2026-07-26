import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import Modal from "../../Modal/Modal";

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

  const inputClass =
    "flex-1 h-11 px-4 outline-none bg-transparent text-on-surface text-sm";

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
    { key: "current", name: "current_password", label: "Current Password" },
    { key: "new", name: "new_password", label: "New Password", hint: "Password must contain at least 8 characters." },
    { key: "confirm", name: "confirm_password", label: "Confirm Password" },
  ];

  return (
    <Modal
      title="Change Password"
      onClose={onClose}
      footer={
        <>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="change-password-form"
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
          >
            Update Password
          </button>
        </>
      }
    >
      <form id="change-password-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-on-surface-variant mb-2">{field.label}</label>
            <div className="flex items-center border border-outline-variant rounded-xl bg-surface-container overflow-hidden focus-within:border-primary transition-colors">
              <input
                type={showPassword[field.key] ? "text" : "password"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => toggleVisibility(field.key)}
                className="w-12 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {showPassword[field.key] ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
            {field.hint && <small className="text-on-surface-variant text-xs mt-1.5 block">{field.hint}</small>}
          </div>
        ))}
      </form>
    </Modal>
  );
}

export default ChangePasswordModal;
