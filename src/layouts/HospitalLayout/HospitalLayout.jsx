import "./HospitalLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function HospitalLayout() {

  return (

    <div className="hospital-layout">

      <Sidebar />

      <div className="hospital-main">

        <Navbar />

        <main className="hospital-content">

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default HospitalLayout;