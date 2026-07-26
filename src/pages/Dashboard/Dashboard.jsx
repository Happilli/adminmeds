import "./Dashboard.css";

import StatCard from "../../components/Statcard/StatCard";
import WeeklyChart from "../../components/WeeklyChart/WeeklyChart";
import RecentAppointments from "../../components/RecentAppointments/RecentAppointments";

import { UserIcon, UsersIcon, CalendarBlankIcon, FirstAidIcon } from "@phosphor-icons/react";

function Dashboard() {
  return (
    <div className="dashboard-content">
      <h1>Hello Admin</h1>
      <p className="welcome-text">Welcome back to MediSync Dashboard</p>

      <div className="stats-grid">
        <StatCard
          number="24"
          title="Doctors"
          subtitle="Active Doctors"
          icon={<UserIcon size={24} />}
          percentage="12%"
        />
        <StatCard
          number="580"
          title="Patients"
          subtitle="Registered Patients"
          icon={<UsersIcon size={24} />}
          percentage="8%"
        />
        <StatCard
          number="34"
          title="Appointments"
          subtitle="Bookings Today"
          icon={<CalendarBlankIcon size={24} />}
          percentage="15%"
        />
        <StatCard
          number="20"
          title="Consultations"
          subtitle="Completed Today"
          icon={<FirstAidIcon size={24} />}
          percentage="10%"
        />
      </div>

      <WeeklyChart />
      <RecentAppointments />
    </div>
  );
}

export default Dashboard;