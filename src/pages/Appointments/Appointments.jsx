import { useEffect,useState } from "react";

import AppointmentToolbar from "../../components/AppointmentToolbar/AppointmentToolbar";
import AppointmentStats from "../../components/AppointmentStats/AppointmentStats";
import AppointmentTable from "../../components/AppointmentTable/AppointmentTable";
import Pagination from "../../components/Pagination/Pagination";
import AppointmentDetailsModal from "../../components/AppointmentDetailsModal/AppointmentDetailsModal";
import UpdateAppointmentStatusModal from "../../components/UpdateAppointmentStatusModal/UpdateAppointmentStatusModal";

import { getHospitalAppointments } from "../../api/appointmentApi";

function Appointments() {
  const [appointmentData, setAppointmentData] = useState([]);

  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const appointmentsPerPage = 5;

  useEffect(() => {
  const loadAppointments = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getHospitalAppointments(token);

      const formattedAppointments = data.map((appointment) => ({
        id: appointment.id,

        date: appointment.appointment_at.split("T")[0],

        time: new Date(appointment.appointment_at).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),

        patient: {
          id: appointment.patient.id,
          name: appointment.patient.name,
          phone: appointment.patient.phone,
        },

        doctor: {
          id: appointment.doctor.id,
          name: appointment.doctor.name,
          department: appointment.doctor.department,
          specialization: appointment.doctor.speciality,
        },

        hospital_id: appointment.hospital_id,

        reason: appointment.notes,

        status:
          appointment.status.charAt(0).toUpperCase() +
          appointment.status.slice(1),
      }));

      setAppointmentData(formattedAppointments);
    } catch (error) {
      console.error("Failed to load appointments:", error);
    }
  };

  loadAppointments();
}, []);

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
    // setSelectedAppointment(appointment);
    // setOpenDetailsModal(true);
      console.log("FULL APPOINTMENT:", appointment);
  console.log("DOCTOR:", appointment.doctor);
  console.log("APPOINTMENT AT:", appointment.appointment_at);

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
        <h2 className="text-2xl font-semibold text-on-surface">Appointment List</h2>
      </div>

      <AppointmentTable
        appointments={paginatedAppointments}
        onViewDetails={handleViewDetails}
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