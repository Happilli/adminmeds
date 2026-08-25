import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

function EditDoctorModal({
  doctor,
  onClose,
  onSave,
  saving,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    speciality: "",
    bio: "",
    address: "",
    years_experience: "",
  });

  useEffect(() => {
    if (!doctor) return;

    setFormData({
      name: doctor.name || "",
      phone: doctor.phone || "",
      department: doctor.department || "",
      speciality: doctor.speciality || "",
      bio: doctor.bio || "",
      address: doctor.address || "",
      years_experience:
        doctor.years_experience ?? "",
    });
  }, [doctor]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave({
      ...formData,
      years_experience:
        formData.years_experience === ""
          ? null
          : Number(formData.years_experience),
    });
  };

  if (!doctor) return null;

  return (
    <Modal
      onClose={onClose}
      maxWidth="max-w-3xl"
      showHeader={false}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        {/* Header */}

        <div>
          <h2 className="text-2xl font-bold text-on-surface">
            Edit Doctor
          </h2>

          <p className="text-sm text-on-surface-variant mt-1">
            Update doctor information.
          </p>
        </div>

        {/* Fields */}

        <div className="grid grid-cols-2 gap-5">

          {/* Name */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
              Full Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary"
            />
          </div>

          {/* Phone */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
              Phone
            </label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary"
            />
          </div>

          {/* Department */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
              Department
            </label>

            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary"
            />
          </div>

          {/* Speciality */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
              Speciality
            </label>

            <input
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary"
            />
          </div>

          {/* Years */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
              Years of Experience
            </label>

            <input
              type="number"
              min="0"
              name="years_experience"
              value={formData.years_experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary"
            />
          </div>

          {/* Address */}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
              Address
            </label>

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary"
            />
          </div>

        </div>

        {/* Bio */}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
            Bio
          </label>

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant outline-none text-sm text-on-surface focus:border-primary resize-none"
          />
        </div>

        {/* Actions */}

        <div className="flex justify-end gap-3 pt-5 border-t border-outline-variant">

          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors cursor-pointer disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors cursor-pointer disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>
      </form>
    </Modal>
  );
}

export default EditDoctorModal;