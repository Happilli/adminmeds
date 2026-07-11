import "./Doctors.css";

import { useState } from "react";

import DoctorStats from "../../components/DoctorStats/DoctorStats";
import DoctorTable from "../../components/DoctorTable/DoctorTable";
import AddDoctorModal from "../../components/AddDoctorModal/AddDoctorModal";

function Doctors() {

  const [openModal, setOpenModal] = useState(false);

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

          <button
            onClick={() => setOpenModal(true)}
          >
            + Add New Doctor
          </button>

        </div>

        {/* <DoctorStats /> */}

        <DoctorTable />

      </div>

      <AddDoctorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </>

  );

}

export default Doctors;

