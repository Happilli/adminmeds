import "./Dashboard.css";

import StatCard from "../../components/Statcard/StatCard";
import WeeklyChart from "../../components/WeeklyChart/WeeklyChart";
import RecentAppointments from "../../components/RecentAppointments/RecentAppointments";

import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

function Dashboard() {

  return (

    <div className="dashboard-content">

      <h1>Hello Admin</h1>

      <p className="welcome-text">
        Welcome back to MediSync Dashboard
      </p>

      <div className="stats-grid">

        <StatCard
          number="24"
          title="Doctors"
          subtitle="Active Doctors"
          icon={<PersonIcon />}
          percentage="12%"
        />

        <StatCard
          number="580"
          title="Patients"
          subtitle="Registered Patients"
          icon={<PeopleIcon />}
          percentage="8%"
        />

        <StatCard
          number="34"
          title="Appointments"
          subtitle="Bookings Today"
          icon={<EventIcon />}
          percentage="15%"
        />

        <StatCard
          number="20"
          title="Consultations"
          subtitle="Completed Today"
          icon={<MedicalServicesIcon />}
          percentage="10%"
        />

      </div>

      <WeeklyChart />

      <RecentAppointments />

    </div>

  );

}

export default Dashboard;