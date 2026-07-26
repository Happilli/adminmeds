import { useState } from "react";
import Modal from "../../Modal/Modal";

function HospitalInformationModal({ hospital, onSave, onClose }) {
  const [formData, setFormData] = useState({
    hospital_name: hospital.hospital_name,
    registration_number: hospital.registration_number,
    hospital_email: hospital.hospital_email,
    hospital_phone: hospital.hospital_phone,
    website: hospital.website,
    address: hospital.address,
  });

  const inputClass =
    "w-full h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <Modal
      title="Hospital Information"
      onClose={onClose}
      maxWidth="max-w-2xl"
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
            form="hospital-info-form"
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
          >
            Save Changes
          </button>
        </>
      }
    >
      <form id="hospital-info-form" onSubmit={handleSubmit} autoComplete="off" className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Hospital Name</label>
          <input type="text" name="hospital_name" value={formData.hospital_name} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Registration Number</label>
          <input type="text" name="registration_number" value={formData.registration_number} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Hospital Email</label>
          <input type="email" name="hospital_email" value={formData.hospital_email} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Hospital Phone</label>
          <input type="text" name="hospital_phone" value={formData.hospital_phone} onChange={handleChange} required className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Website (Optional)</label>
          <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://example.com" className={inputClass} />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-on-surface-variant mb-2">Address</label>
          <textarea name="address" rows="3" value={formData.address} onChange={handleChange} required className={`${inputClass} h-auto py-3 resize-y`} />
        </div>
      </form>
    </Modal>
  );
}

export default HospitalInformationModal;
