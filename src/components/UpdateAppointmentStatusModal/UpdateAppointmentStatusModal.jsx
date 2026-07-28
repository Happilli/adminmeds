import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";

const STATUS_OPTIONS = ["Pending", "Confirmed", "Completed", "Cancelled"];

function UpdateAppointmentStatusModal({ open, appointment, onClose, onSave }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (appointment) {
      setStatus(appointment.status);
    }
  }, [appointment]);

  if (!open || !appointment) return null;

  const handleSave = () => {
    onSave(status);
    onClose();
  };

  const details = [
    { label: "Patient", value: appointment.patient.name },
    { label: "Doctor", value: appointment.doctor.name },
    { label: "Appointment Date", value: appointment.date },
  ];

  return (
    <Modal
      title="Update Appointment Status"
      onClose={onClose}
      maxWidth="max-w-lg"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-6 cursor-pointer py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg cursor-pointer bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
          >
            Save Changes
          </button>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 bg-surface-container-high/50 rounded-xl p-5">
          {details.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-on-surface-variant">{item.label}</span>
              <span className="text-sm font-semibold text-on-surface">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-on-surface-variant">Status</label>
          <Dropdown options={STATUS_OPTIONS} value={status} onChange={setStatus} placeholder="Select status" />
        </div>
      </div>
    </Modal>
  );
}

export default UpdateAppointmentStatusModal;