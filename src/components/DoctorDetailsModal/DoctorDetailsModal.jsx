import Modal from "../Modal/Modal";

function DoctorDetailsModal({ doctor, onClose }) {
  if (!doctor) return null;

  const fields = [
    { label: "Full Name", value: doctor.name },
    { label: "Email", value: doctor.email },
    { label: "Phone", value: doctor.phone },
    { label: "Department", value: doctor.department },
    { label: "Speciality", value: doctor.speciality },
    {
      label: "Years of Experience",
      value:
        doctor.years_experience != null
          ? `${doctor.years_experience} years`
          : "—",
    },
    { label: "License Number", value: doctor.license_number },
    { label: "Address", value: doctor.address },
  ];

  return (
    <Modal
      onClose={onClose}
      maxWidth="max-w-3xl"
      showHeader={false}
    >
      <div className="flex flex-col gap-7">

        <div>
          <h2 className="text-2xl font-bold text-on-surface">
            Doctor Details
          </h2>

          <p className="text-sm text-on-surface-variant mt-1">
            View doctor information
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {fields.map((field) => (
            <div key={field.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
                {field.label}
              </p>

              <div className="px-4 py-3 rounded-xl bg-surface-container border border-outline-variant text-sm text-on-surface min-h-11">
                {field.value || "—"}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">
            Bio
          </p>

          <div className="px-4 py-3 rounded-xl bg-surface-container border border-outline-variant text-sm text-on-surface min-h-20">
            {doctor.bio || "—"}
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-outline-variant">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant mb-1">
              Verification Status
            </p>

            <span
              className={`inline-block px-3.5 py-1.5 rounded border text-xs font-semibold ${
                doctor.is_verified
                  ? "bg-tertiary-container/20 text-tertiary"
                  : "bg-error-container/20 text-error"
              }`}
            >
              {doctor.is_verified ? "VERIFIED" : "UNVERIFIED"}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Close
          </button>

        </div>
      </div>
    </Modal>
  );
}

export default DoctorDetailsModal;