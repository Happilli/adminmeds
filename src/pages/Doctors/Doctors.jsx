import { useEffect, useState } from "react";

import DoctorStats from "../../components/DoctorStats/DoctorStats";
import DoctorTable from "../../components/DoctorTable/DoctorTable";
import AddDoctorModal from "../../components/AddDoctorModal/AddDoctorModal";
import Pagination from "../../components/Pagination/Pagination";
import DoctorDetailsModal from "../../components/DoctorDetailsModal/DoctorDetailsModal";

import {
  getDoctors,
  getDoctor,
  registerDoctor,
} from "../../api/doctorApi.js";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);

  const [error, setError] = useState("");

  const doctorsPerPage = 5;

  /*
   * Get the FastAPI JWT.
   *
   * Use the same storage key that your Login.jsx
   * currently uses.
   */
  const token = localStorage.getItem("token");

  // --------------------------------
  // Load doctors
  // --------------------------------

  const loadDoctors = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getDoctors(token);

      setDoctors(data);
    } catch (err) {
      console.error("Failed to load doctors:", err);

      setError(
        err.message || "Failed to load doctors."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  // --------------------------------
  // Add doctor
  // --------------------------------

  const handleSaveDoctor = async (doctorData) => {
    try {
      setSaving(true);
      setError("");

      /*
       * FastAPI expects multipart/form-data.
       */
      const formData = new FormData();

      formData.append("email", doctorData.email);
      formData.append("password", doctorData.password);
      formData.append("name", doctorData.name);
      formData.append("phone", doctorData.phone);
      formData.append("department", doctorData.department);
      formData.append("speciality", doctorData.speciality);
      formData.append("bio", doctorData.bio);
      formData.append("address", doctorData.address);

      formData.append(
        "license_number",
        doctorData.license_number
      );

      formData.append(
        "years_experience",
        doctorData.years_experience
      );

      if (doctorData.license_photo) {
        formData.append(
          "license_photo",
          doctorData.license_photo
        );
      }

      console.log("Registering doctor...");

      const response = await registerDoctor(
        formData,
        token
      );

      console.log(
        "Doctor registered successfully:",
        response
      );

      setOpenModal(false);

      /*
       * Get the latest doctors from the database.
       */
      await loadDoctors();

      /*
       * Return pagination to first page.
       */
      setCurrentPage(1);
    } catch (err) {
      console.error(
        "Failed to register doctor:",
        err
      );

      setError(
        err.message || "Failed to register doctor."
      );
    } finally {
      setSaving(false);
    }
  };

  // --------------------------------
  // View doctor
  // --------------------------------

  const handleViewDoctor = async (doctor) => {
    try {
      setViewLoading(true);
      setError("");

      console.log(
        "Loading doctor details for ID:",
        doctor.id
      );

      const data = await getDoctor(
        doctor.id,
        token
      );

      console.log(
        "Doctor details received:",
        data
      );

      setSelectedDoctor(data);
    } catch (err) {
      console.error(
        "Failed to load doctor details:",
        err
      );

      setError(
        err.message ||
          "Failed to load doctor details."
      );
    } finally {
      setViewLoading(false);
    }
  };

  // --------------------------------
  // Search
  // --------------------------------

  const filteredDoctors = doctors.filter(
    (doctor) => {
      const name =
        doctor.name?.toLowerCase() || "";

      const speciality =
        doctor.speciality?.toLowerCase() || "";

      const searchValue =
        search.toLowerCase();

      return (
        name.includes(searchValue) ||
        speciality.includes(searchValue)
      );
    }
  );

  // --------------------------------
  // Pagination
  // --------------------------------

  const totalPages = Math.ceil(
    filteredDoctors.length / doctorsPerPage
  );

  const indexOfLastDoctor =
    currentPage * doctorsPerPage;

  const indexOfFirstDoctor =
    indexOfLastDoctor - doctorsPerPage;

  const currentDoctors =
    filteredDoctors.slice(
      indexOfFirstDoctor,
      indexOfLastDoctor
    );

  // --------------------------------
  // Render
  // --------------------------------

  return (
    <>
      <div className="flex flex-col gap-6">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold text-on-surface mb-1">
              Doctor Management
            </h1>

            <p className="text-on-surface-variant text-sm">
              Oversee and manage all doctors in your hospital.
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            disabled={saving}
            className="bg-primary cursor-pointer text-on-primary px-5 py-3 rounded-xl text-sm font-semibold hover:bg-primary-fixed-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add New Doctor
          </button>

        </div>

        {/* Error */}

        {error && (
          <div className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
            {error}
          </div>
        )}

        {/* Stats */}

        <DoctorStats doctors={doctors} />

        {/* Table */}

        {loading ? (
          <div className="flex items-center justify-center py-12 text-on-surface-variant">
            Loading doctors...
          </div>
        ) : (
          <DoctorTable
            doctors={currentDoctors}
            search={search}
            setSearch={setSearch}
            onView={handleViewDoctor}
          />
        )}

        {/* Pagination */}

        {!loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={doctorsPerPage}
            totalItems={filteredDoctors.length}
            onPageChange={setCurrentPage}
          />
        )}

      </div>

      {/* Add Doctor Modal */}

      {openModal && (
        <AddDoctorModal
          onClose={() => setOpenModal(false)}
          onSave={handleSaveDoctor}
        />
      )}

      {/* View Doctor Modal */}

      {selectedDoctor && (
        <DoctorDetailsModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

      {/* View Loading */}

      {viewLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="rounded-xl bg-surface-container px-6 py-4 shadow-lg">
            <p className="text-sm text-on-surface">
              Loading doctor details...
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Doctors;