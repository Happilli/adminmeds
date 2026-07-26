import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

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

  return (
    <Modal
      title="Update Appointment Status"
      onClose={onClose}
      maxWidth="max-w-lg"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
          >
            Save Changes
          </button>
        </>
      }
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-on-surface-variant">Patient</label>
          <input
            type="text"
            value={appointment.patient.name}
            disabled
            className="h-11 px-4 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface-variant text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-on-surface-variant">Doctor</label>
          <input
            type="text"
            value={appointment.doctor.name}
            disabled
            className="h-11 px-4 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface-variant text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-on-surface-variant">Appointment Date</label>
          <input
            type="text"
            value={appointment.date}
            disabled
            className="h-11 px-4 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface-variant text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-on-surface-variant">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm cursor-pointer focus:border-primary outline-none transition-colors"
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateAppointmentStatusModal;