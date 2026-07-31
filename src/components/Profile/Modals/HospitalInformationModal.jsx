import { useState } from "react";
import Modal from "../../Modal/Modal";

const inputClass =
  "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full";

const readOnlyInputClass =
  "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface-variant text-sm w-full cursor-not-allowed";

const textareaClass =
  "px-4 py-3 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full resize-none";

const labelClass =
  "block text-sm font-medium text-on-surface mb-2";

const helperClass =
  "mt-1 text-xs text-on-surface-variant";

function HospitalInformationModal({ hospital, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: hospital.name || "",
    registration_number: hospital.registration_number || "",
    phone: hospital.phone || "",
    website: hospital.website || "",
    address: hospital.address || "",
    description: hospital.description || "",
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

    onSave({
      name: formData.name,
      phone: formData.phone,
      website: formData.website,
      address: formData.address,
      description: formData.description,
    });
  };

  return (
    <Modal
      onClose={onClose}
      maxWidth="max-w-2xl"
      showHeader={false}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7"
        autoComplete="off"
      >
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-on-surface">
            Edit Hospital Information
          </h2>

          <p className="text-sm text-on-surface-variant mt-2">
            Update your hospital information. These changes will be reflected
            throughout the system.
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Hospital Name */}
          <div>
            <label className={labelClass}>
              Hospital Name <span className="text-error">*</span>
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Registration */}
          <div>
            <label className={labelClass}>
              Registration Number
            </label>

            <input
              type="text"
              value={formData.registration_number}
              disabled
              className={readOnlyInputClass}
            />

            <p className={helperClass}>
              Assigned during hospital registration.
            </p>
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>
              Phone Number <span className="text-error">*</span>
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Website */}
          <div>
            <label className={labelClass}>
              Website
            </label>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={inputClass}
            />

            <p className={helperClass}>
              Optional. Include https:// if available.
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Hospital Address <span className="text-error">*</span>
            </label>

            <textarea
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={textareaClass}
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Description
            </label>

            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={textareaClass}
              placeholder="Briefly describe your hospital, services, or specialties..."
            />

            <p className={helperClass}>
              This helps provide a better overview of your hospital.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-outline-variant pt-6">

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-outline-variant text-on-surface font-medium hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-medium hover:bg-primary-fixed-dim transition-colors cursor-pointer"
          >
            Save Changes
          </button>

        </div>
      </form>
    </Modal>
  );
}

export default HospitalInformationModal;