import { useState } from "react";

import AppointmentToolbar from "../../components/AppointmentToolbar/AppointmentToolbar";
import AppointmentStats from "../../components/AppointmentStats/AppointmentStats";
import AppointmentTable from "../../components/AppointmentTable/AppointmentTable";
import Pagination from "../../components/Pagination/Pagination";
import AppointmentDetailsModal from "../../components/AppointmentDetailsModal/AppointmentDetailsModal";
import UpdateAppointmentStatusModal from "../../components/UpdateAppointmentStatusModal/UpdateAppointmentStatusModal";

import appointments from "../../data/appointments";

function Appointments() {
  const [appointmentData, setAppointmentData] = useState(appointments);

  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const appointmentsPerPage = 5;

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
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
    handleCloseStatusModal();
  };

  const filteredAppointments = appointmentData.filter((appointment) => {
    const matchesStatus = statusFilter === "All" || appointment.status === statusFilter;
    const matchesDate = selectedDate === "" || appointment.date === selectedDate;
    const search = searchQuery.toLowerCase();
    const matchesSearch =
      appointment.patient.name.toLowerCase().includes(search) ||
      appointment.doctor.name.toLowerCase().includes(search);

    return matchesStatus && matchesDate && matchesSearch;
  });

  const stats = {
    total: filteredAppointments.length,
    confirmed: filteredAppointments.filter((a) => a.status === "Confirmed").length,
    completed: filteredAppointments.filter((a) => a.status === "Completed").length,
    pending: filteredAppointments.filter((a) => a.status === "Pending").length,
    cancelled: filteredAppointments.filter((a) => a.status === "Cancelled").length,
  };

  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);
  const startIndex = (currentPage - 1) * appointmentsPerPage;
  const paginatedAppointments = filteredAppointments.slice(startIndex, startIndex + appointmentsPerPage);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-on-surface mb-1">Appointments</h1>
        <p className="text-on-surface-variant text-sm">
          Manage all scheduled appointments and patient status.
        </p>
      </div>

      <AppointmentToolbar
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <AppointmentStats stats={stats} />

      <div>
        <h2 className="text-lg font-semibold text-on-surface mb-1">Appointment List</h2>
        <p className="text-sm text-on-surface-variant">
          Showing <span className="text-on-surface font-medium">{filteredAppointments.length}</span> appointment
          {filteredAppointments.length !== 1 && "s"}
        </p>
      </div>

      <AppointmentTable
        appointments={paginatedAppointments}
        onViewDetails={handleViewDetails}
        onUpdateStatus={handleOpenStatusModal}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={appointmentsPerPage}
        totalItems={filteredAppointments.length}
        onPageChange={setCurrentPage}
      />

      <AppointmentDetailsModal
        open={openDetailsModal}
        appointment={selectedAppointment}
        onClose={handleCloseDetails}
      />

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