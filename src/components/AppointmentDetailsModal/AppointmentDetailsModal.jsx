import Modal from "../Modal/Modal";

function AppointmentDetailsModal({ open, appointment, onClose }) {
  if (!open || !appointment) return null;

  const statusStyles = {
    confirmed: "bg-tertiary-container/20 text-tertiary",
    completed: "bg-secondary-container/40 text-secondary",
    pending: "bg-primary-container/20 text-primary",
    cancelled: "bg-error-container/20 text-error",
  };

  const patientInfo = [
    { label: "Name", value: appointment.patient.name },
    { label: "Phone", value: appointment.patient.phone },
    { label: "Age", value: `${appointment.patient.age} Years` },
    { label: "Gender", value: appointment.patient.gender },
  ];

  const appointmentInfo = [
    { label: "Appointment ID", value: appointment.appointmentNumber },
    { label: "Department", value: appointment.doctor.department },
    { label: "Doctor", value: appointment.doctor.name },
    { label: "Date", value: appointment.date },
    { label: "Time", value: appointment.time },
    { label: "Reason", value: appointment.reason },
  ];

  return (
    <Modal
      title="Appointment Details"
      onClose={onClose}
      maxWidth="max-w-2xl"
      footer={
        <button
          onClick={onClose}
          className="px-6  cursor-pointer py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
        >
          Close
        </button>
      }
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-on-surface">Patient Information</h3>
          <span
            className={`inline-block w-fit px-3 py-1 rounded border text-xs font-semibold ${statusStyles[appointment.status.toLowerCase()]}`}
          >
            {appointment.status.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-5 bg-surface-container-high/50  rounded-xl p-5">
          {patientInfo.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-on-surface-variant">{item.label}</label>
              <span className="text-sm font-medium text-on-surface">{item.value}</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-base font-semibold text-on-surface mb-4">Appointment Information</h3>
          <div className="grid grid-cols-2 gap-5 bg-surface-container-high/50 rounded-xl p-5">
            {appointmentInfo.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-on-surface-variant">{item.label}</label>
                <span className="text-sm font-medium text-on-surface">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AppointmentDetailsModal;