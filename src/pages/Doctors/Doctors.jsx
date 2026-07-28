import { useState } from "react";

import doctorsData from "../../data/doctors";

import DoctorStats from "../../components/DoctorStats/DoctorStats";
import DoctorTable from "../../components/DoctorTable/DoctorTable";
import AddDoctorModal from "../../components/AddDoctorModal/AddDoctorModal";
import Pagination from "../../components/Pagination/Pagination";

function Doctors() {
  const [doctors, setDoctors] = useState(doctorsData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const doctorsPerPage = 5;

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleSaveDoctor = (doctorData) => {
    console.log(doctorData);
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-on-surface mb-1">Doctor Management</h1>
            <p className="text-on-surface-variant text-sm">
              Oversee and manage all doctors in your hospital.
            </p>
          </div>

          <button
            onClick={handleOpenModal}
            className="bg-primary cursor-pointer text-on-primary px-5 py-3 rounded-xl text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
          >
            Add New Doctor
          </button>
        </div>

        <DoctorStats />

        <DoctorTable doctors={currentDoctors} search={search} setSearch={setSearch} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={doctorsPerPage}
          totalItems={filteredDoctors.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {openModal && <AddDoctorModal onClose={handleCloseModal} onSave={handleSaveDoctor} />}
    </>
  );
}

export default Doctors;
