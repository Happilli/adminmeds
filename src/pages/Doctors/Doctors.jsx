import "./Doctors.css";

import { useState } from "react";

import doctorsData from "../../data/doctors";

import DoctorTable from "../../components/DoctorTable/DoctorTable";
import AddDoctorModal from "../../components/AddDoctorModal/AddDoctorModal";
import Pagination from "../../components/Pagination/Pagination";

function Doctors() {

  const [doctors, setDoctors] = useState(doctorsData);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);

  const doctorsPerPage = 5;

  const filteredDoctors = doctors.filter((doctor) =>

    doctor.name.toLowerCase().includes(search.toLowerCase()) ||

    doctor.specialization.toLowerCase().includes(search.toLowerCase())

  );

  const totalPages = Math.ceil(
    filteredDoctors.length / doctorsPerPage
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;

  const indexOfFirstDoctor =
    indexOfLastDoctor - doctorsPerPage;

  const currentDoctors =
    filteredDoctors.slice(
      indexOfFirstDoctor,
      indexOfLastDoctor
    );

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveDoctor = (doctorData) => {

    console.log(doctorData);

    // Future FastAPI
    // await doctorApi.createDoctor(doctorData);

    setOpenModal(false);

  };

  return (

    <>

      <div className="doctor-content">

        <div className="doctor-header">

          <div>

            <h1>Doctor Management</h1>

            <p>
              Oversee and manage all doctors in your hospital.
            </p>

          </div>

          <button onClick={handleOpenModal}>
            + Add New Doctor
          </button>

        </div>

        <DoctorTable

          doctors={currentDoctors}

          search={search}

          setSearch={setSearch}

        />

        <Pagination

          currentPage={currentPage}

          totalPages={totalPages}

          pageSize={doctorsPerPage}

          totalItems={filteredDoctors.length}

          onPageChange={setCurrentPage}

        />

      </div>

      {openModal && (

        <AddDoctorModal

          onClose={handleCloseModal}

          onSave={handleSaveDoctor}

        />

      )}

    </>

  );

}

export default Doctors;