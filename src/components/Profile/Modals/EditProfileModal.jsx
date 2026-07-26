import { useState } from "react";
import Modal from "../../Modal/Modal";

function EditProfileModal({ profile, onSave, onClose }) {
  const [formData, setFormData] = useState({
    full_name: profile.full_name,
    email: profile.email,
    phone: profile.phone,
  });

  const inputClass =
    "w-full h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ ...profile, ...formData });
  };

  return (
    <Modal
      title="Edit Profile"
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
            form="edit-profile-form"
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
          >
            Save Changes
          </button>
        </>
      }
    >
      <form id="edit-profile-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-on-surface-variant mb-2">
            Full Name
          </label>
          <input id="full_name" type="text" name="full_name" value={formData.full_name} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2">
            Email Address
          </label>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-on-surface-variant mb-2">
            Phone Number
          </label>
          <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} />
        </div>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
