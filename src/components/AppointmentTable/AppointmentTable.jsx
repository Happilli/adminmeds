import "./AppointmentTable.css";

import { useState, useRef, useEffect } from "react";
import { DotsThreeVerticalIcon, EyeIcon, PencilSimpleIcon } from "@phosphor-icons/react";

function AppointmentTable({
  appointments,
  onViewDetails,
  onUpdateStatus,
}) {

  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuToggle = (appointmentId) => {
    setOpenMenuId((prev) => (prev === appointmentId ? null : appointmentId));
  };

  const handleViewDetailsClick = (appointment) => {
    onViewDetails(appointment);
    setOpenMenuId(null);
  };

  const handleUpdateStatusClick = (appointment) => {
    onUpdateStatus(appointment);
    setOpenMenuId(null);
  };

  return (
    <table className="appointment-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>
              <div className="appointment-time">
                <strong>{appointment.time}</strong>
                <span>{appointment.date}</span>
              </div>
            </td>

            <td>
              <div className="patient-info">
                <strong>{appointment.patient.name}</strong>
                <span>{appointment.patient.details}</span>
              </div>
            </td>

            <td>
              <div className="doctor-info">
                <strong>{appointment.doctor.name}</strong>
                <span>{appointment.doctor.specialization}</span>
              </div>
            </td>

            <td>{appointment.reason}</td>

            <td>
              <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </span>
            </td>

            <td className="action-cell">
              <button
                className="action-btn"
                onClick={() => handleMenuToggle(appointment.id)}
              >
                <DotsThreeVerticalIcon size={20} />
              </button>

              {openMenuId === appointment.id && (
                <div className="action-menu" ref={menuRef}>
                  <button
                    className="action-menu-item"
                    onClick={() => handleViewDetailsClick(appointment)}
                  >
                    <EyeIcon size={18} />
                    View Details
                  </button>
                  <button
                    className="action-menu-item"
                    onClick={() => handleUpdateStatusClick(appointment)}
                  >
                    <PencilSimpleIcon size={18} />
                    Update Status
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AppointmentTable;
