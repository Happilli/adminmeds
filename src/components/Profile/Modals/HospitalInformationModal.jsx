import { useState } from "react";
import Modal from "../../Modal/Modal";

const inputClass = "h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm outline-none focus:border-primary transition-colors w-full";

function HospitalInformationModal({ hospital, onSave, onClose }) {
  const [formData, setFormData] = useState({
    hospital_name: hospital.hospital_name,
    registration_number: hospital.registration_number,
    hospital_email: hospital.hospital_email,
    hospital_phone: hospital.hospital_phone,
    website: hospital.website,
    address: hospital.address,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <Modal onClose={onClose} maxWidth="max-w-2xl" showHeader={false}>
      <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <input type="text" name="hospital_name" placeholder="Hospital Name" value={formData.hospital_name} onChange={handleChange} required className={inputClass} />
          <input type="text" name="registration_number" placeholder="Registration Number" value={formData.registration_number} onChange={handleChange} required className={inputClass} />
          <input type="email" name="hospital_email" placeholder="Hospital Email" value={formData.hospital_email} onChange={handleChange} required className={inputClass} />
          <input type="text" name="hospital_phone" placeholder="Hospital Phone" value={formData.hospital_phone} onChange={handleChange} required className={inputClass} />
          <input type="url" name="website" placeholder="Website (Optional)" value={formData.website} onChange={handleChange} className={`${inputClass} col-span-2`} />
          <textarea name="address" rows="3" placeholder="Address" value={formData.address} onChange={handleChange} required className={`${inputClass} col-span-2 h-auto py-3 resize-y`} />
        </div>

        <div className="flex justify-end gap-4 pt-2">
          <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors cursor-pointer">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors cursor-pointer">
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default HospitalInformationModal;