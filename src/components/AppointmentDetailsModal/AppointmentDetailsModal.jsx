import Modal from "../Modal/Modal";

function AppointmentDetailsModal({ open, appointment, onClose }) {
  if (!open || !appointment) return null;

  const statusStyles = {
    Confirmed: "bg-tertiary-container/20 text-tertiary",
    Completed: "bg-secondary-container/40 text-secondary",
    Pending: "bg-primary-container/20 text-primary",
    Cancelled: "bg-error-container/20 text-error",
  };

  const patientInfo = [
    {
      label: "Name",
      value: appointment.patient?.name || "N/A",
    },
    {
      label: "Phone",
      value: appointment.patient?.phone || "N/A",
    },
  ];

  const appointmentInfo = [
    {
      label: "Appointment ID",
      value: appointment.id || "N/A",
    },
    {
      label: "Department",
      value: appointment.doctor?.department || "N/A",
    },
    {
      label: "Speciality",
      value: appointment.doctor?.specialization || "N/A",
    },
    {
      label: "Doctor",
      value: appointment.doctor?.name || "N/A",
    },
    {
      label: "Date",
      value: appointment.date || "N/A",
    },
    {
      label: "Time",
      value: appointment.time || "N/A",
    },
    {
      label: "Reason",
      value: appointment.reason || "N/A",
    },
  ];

  return (
    <Modal
      title="Appointment Details"
      onClose={onClose}
      maxWidth="max-w-2xl"
      footer={
        <button
          onClick={onClose}
          className="px-6 cursor-pointer py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
        >
          Close
        </button>
      }
    >
      <div className="flex flex-col gap-8">

        {/* Patient Information */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-on-surface">
              Patient Information
            </h3>

            <span
              className={`inline-block w-fit px-3 py-1 rounded border text-xs font-semibold ${
                statusStyles[appointment.status] || ""
              }`}
            >
              {appointment.status?.toUpperCase() || "N/A"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5 bg-surface-container-high/50 rounded-xl p-5">
            {patientInfo.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-on-surface-variant">
                  {item.label}
                </label>

                <span className="text-sm font-medium text-on-surface">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Information */}
        <div>
          <h3 className="text-base font-semibold text-on-surface mb-4">
            Appointment Information
          </h3>

          <div className="grid grid-cols-2 gap-5 bg-surface-container-high/50 rounded-xl p-5">
            {appointmentInfo.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-on-surface-variant">
                  {item.label}
                </label>

                <span className="text-sm font-medium text-on-surface">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
}

export default AppointmentDetailsModal;