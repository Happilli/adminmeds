import "./AppointmentTable.css";

import { useState } from "react";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function AppointmentTable({
  appointments,
  onViewDetails,
  onUpdateStatus,
}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event, appointment) => {
    setAnchorEl(event.currentTarget);
    setSelectedAppointment(appointment);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewDetailsClick = () => {

    onViewDetails(selectedAppointment);

    handleMenuClose();

  };

  const handleUpdateStatusClick = () => {

    onUpdateStatus(selectedAppointment);

    handleMenuClose();

  };

  return (
    <>

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

                <span
                  className={`status-badge ${appointment.status.toLowerCase()}`}
                >
                  {appointment.status}
                </span>

              </td>

              <td>

                <button
                  className="action-btn"
                  onClick={(event) =>
                    handleMenuOpen(event, appointment)
                  }
                >
                  <MoreVertRoundedIcon />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >

        <MenuItem onClick={handleViewDetailsClick}>

          <VisibilityOutlinedIcon
            fontSize="small"
            sx={{ mr: 1 }}
          />

          View Details

        </MenuItem>

        <MenuItem onClick={handleUpdateStatusClick}>

          <EditOutlinedIcon
            fontSize="small"
            sx={{ mr: 1 }}
          />

          Update Status

        </MenuItem>

      </Menu>

    </>
  );
}

export default AppointmentTable;