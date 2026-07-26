import "./AppointmentDetailsModal.css";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function AppointmentDetailsModal({
  open,
  appointment,
  onClose,
}) {

  if (!open || !appointment) return null;
  console.log(appointment);
console.log(appointment.patient);

  return (

    <div className="appointment-modal-overlay">

      <div className="appointment-modal">

        {/* Header */}

        <div className="appointment-modal-header">

          <h2>Appointment Details</h2>

          <button
            className="modal-close-btn"
            onClick={onClose}
          >
            <CloseRoundedIcon />
          </button>

        </div>

        {/* Body */}

        <div className="appointment-modal-body">

          {/* Patient Information */}

          <div className="modal-section">

            <h3>Patient Information</h3>

            <div className="modal-grid">

              <div className="modal-item">
                <label>Name</label>
                <span>{appointment.patient.name}</span>
              </div>

              <div className="modal-item">
                <label>Phone</label>
                <span>{appointment.patient.phone}</span>
              </div>

              <div className="modal-item">
                <label>Age</label>
                <span>{appointment.patient.age} Years</span>
              </div>

              <div className="modal-item">
                <label>Gender</label>
                <span>{appointment.patient.gender}</span>
              </div>

            </div>

          </div>

          {/* Appointment Information */}

          <div className="modal-section">

            <h3>Appointment Information</h3>

            <div className="modal-grid">

              <div className="modal-item">
                <label>Appointment ID</label>
                <span>{appointment.appointmentNumber}</span>
              </div>

              <div className="modal-item">
                <label>Department</label>
                <span>{appointment.doctor.department}</span>
              </div>

              <div className="modal-item">
                <label>Doctor</label>
                <span>{appointment.doctor.name}</span>
              </div>

              <div className="modal-item">
                <label>Date</label>
                <span>{appointment.date}</span>
              </div>

              <div className="modal-item">
                <label>Time</label>
                <span>{appointment.time}</span>
              </div>

              <div className="modal-item">
                <label>Reason</label>
                <span>{appointment.reason}</span>
              </div>

              <div className="modal-item">
                <label>Status</label>

                <span
                  className={`status-badge ${appointment.status.toLowerCase()}`}
                >
                  {appointment.status}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="appointment-modal-footer">

          <button
            className="close-modal-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>

  );

}

export default AppointmentDetailsModal;