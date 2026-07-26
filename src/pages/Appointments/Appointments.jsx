import "./Appointments.css";

import { useState } from "react";

import AppointmentToolbar from "../../components/AppointmentToolbar/AppointmentToolbar";
import AppointmentStats from "../../components/AppointmentStats/AppointmentStats";
import AppointmentTable from "../../components/AppointmentTable/AppointmentTable";
import Pagination from "../../components/Pagination/Pagination";
import AppointmentDetailsModal from "../../components/AppointmentDetailsModal/AppointmentDetailsModal";
import UpdateAppointmentStatusModal from "../../components/UpdateAppointmentStatusModal/UpdateAppointmentStatusModal";

import appointments from "../../data/appointments";

function Appointments() {

  // ==========================
  // State
  // ==========================

  const [appointmentData, setAppointmentData] = useState(appointments);

  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const appointmentsPerPage = 5;

  // ==========================
  // Filter Handlers
  // ==========================

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  // ==========================
  // Modal Handlers
  // ==========================

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenDetailsModal(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsModal(false);
    setSelectedAppointment(null);
  };

  const handleOpenStatusModal = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenStatusModal(true);
  };

  const handleCloseStatusModal = () => {
    setOpenStatusModal(false);
    setSelectedAppointment(null);
  };

  const handleSaveStatus = (newStatus) => {

    setAppointmentData((previousAppointments) =>
      previousAppointments.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? {
              ...appointment,
              status: newStatus,
            }
          : appointment
      )
    );

    handleCloseStatusModal();

  };

  // ==========================
  // Filter Appointments
  // ==========================

  const filteredAppointments = appointmentData.filter((appointment) => {

    const matchesStatus =
      statusFilter === "All" ||
      appointment.status === statusFilter;

    const matchesDate =
      selectedDate === "" ||
      appointment.date === selectedDate;

    const search = searchQuery.toLowerCase();

    const matchesSearch =
      appointment.patient.name.toLowerCase().includes(search) ||
      appointment.doctor.name.toLowerCase().includes(search);

    return (
      matchesStatus &&
      matchesDate &&
      matchesSearch
    );

  });

  // ==========================
  // Statistics
  // ==========================

  const stats = {

    total: filteredAppointments.length,

    confirmed: filteredAppointments.filter(
      (appointment) => appointment.status === "Confirmed"
    ).length,

    completed: filteredAppointments.filter(
      (appointment) => appointment.status === "Completed"
    ).length,

    pending: filteredAppointments.filter(
      (appointment) => appointment.status === "Pending"
    ).length,

    cancelled: filteredAppointments.filter(
      (appointment) => appointment.status === "Cancelled"
    ).length,

  };

  // ==========================
  // Pagination
  // ==========================

  const totalPages = Math.ceil(
    filteredAppointments.length / appointmentsPerPage
  );

  const startIndex = (currentPage - 1) * appointmentsPerPage;

  const paginatedAppointments = filteredAppointments.slice(
    startIndex,
    startIndex + appointmentsPerPage
  );

  return (

    <div className="appointment-content">

      {/* Header */}

      <div className="appointment-header">

        <div className="appointment-title">

          <h1>Appointments</h1>

          <p>
            Manage all scheduled appointments and patient status.
          </p>

        </div>

      </div>

      {/* Toolbar */}

      <AppointmentToolbar
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Statistics */}

      <AppointmentStats stats={stats} />

      {/* Section Header */}

      <div className="appointment-section-header">

        <div>

          <h2>Appointment List</h2>

          <p>
            Showing <span>{filteredAppointments.length}</span> appointment
            {filteredAppointments.length !== 1 && "s"}
          </p>

        </div>

      </div>

      {/* Table */}

      <AppointmentTable
        appointments={paginatedAppointments}
        onViewDetails={handleViewDetails}
        onUpdateStatus={handleOpenStatusModal}
      />

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={appointmentsPerPage}
        totalItems={filteredAppointments.length}
        onPageChange={setCurrentPage}
      />

      {/* Details Modal */}

      <AppointmentDetailsModal
        open={openDetailsModal}
        appointment={selectedAppointment}
        onClose={handleCloseDetails}
      />

      {/* Update Status Modal */}

      <UpdateAppointmentStatusModal
        open={openStatusModal}
        appointment={selectedAppointment}
        onClose={handleCloseStatusModal}
        onSave={handleSaveStatus}
      />

    </div>

  );

}

export default Appointments;