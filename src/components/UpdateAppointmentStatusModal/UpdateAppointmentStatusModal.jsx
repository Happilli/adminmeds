import "./UpdateAppointmentStatusModal.css";

import { useEffect, useState } from "react";
import { XIcon } from "@phosphor-icons/react";

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
    <div className="status-modal-overlay">
      <div className="status-modal">
        <div className="status-modal-header">
          <h2>Update Appointment Status</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <XIcon size={22} />
          </button>
        </div>

        <div className="status-modal-body">
          <div className="status-field">
            <label>Patient</label>
            <input type="text" value={appointment.patient.name} disabled />
          </div>

          <div className="status-field">
            <label>Doctor</label>
            <input type="text" value={appointment.doctor.name} disabled />
          </div>

          <div className="status-field">
            <label>Appointment Date</label>
            <input type="text" value={appointment.date} disabled />
          </div>

          <div className="status-field">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="status-modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAppointmentStatusModal;
