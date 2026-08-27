import { useEffect, useState } from "react";
import StatCard from "../../components/Statcard/StatCard";
import WeeklyChart from "../../components/WeeklyChart/WeeklyChart";
import RecentAppointments from "../../components/RecentAppointments/RecentAppointments";
import { getHospitalDashboard,getHospitalAppointments } from "../../api/hospitalApi";
import {
  StethoscopeIcon,
  UsersThreeIcon,
  CalendarIcon,
  NotepadIcon,
} from "@phosphor-icons/react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState([]);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true);
      setError("");
          try {
      const token = localStorage.getItem("token");

      const [dashboard, appointmentsData] = await Promise.all([
        getHospitalDashboard(token),
        getHospitalAppointments(token),
      ]);

      setDashboardData(dashboard);
      setAppointments(appointmentsData);
    }
      catch (err) {
        setError(err.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const stats = dashboardData
    ? [
      {
        key: "doctors",
        number: String(dashboardData.total_doctors),
        title: "Doctors",
        subtitle: "Total Doctors",
        icon: <StethoscopeIcon size={24} weight="fill" />,
      },
      {
        key: "verified_doctors",
        number: String(dashboardData.verified_doctors),
        title: "Verified Doctors",
        subtitle: "Active & Verified",
        icon: <UsersThreeIcon size={24} weight="fill" />,
      },
      {
        key: "appointments",
        number: String(dashboardData.total_appointments),
        title: "Appointments",
        subtitle: "Total Bookings",
        icon: <CalendarIcon size={24} weight="fill" />,
      },
      {
        key: "security",
        number: dashboardData.has_security_answer ? "Set" : "Not Set",
        title: "Security Answer",
        subtitle: "Account Recovery",
        icon: <NotepadIcon size={24} weight="fill" />,
      },
    ]
    : [];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold text-on-surface mb-1">
            {getGreeting()}, {dashboardData?.name || "Admin"}
          </h1>
          <p className="text-on-surface-variant text-sm">
            Here's what's happening at your hospital today.
          </p>
        </div>
        <p className="text-on-surface-variant text-sm">{today}</p>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-xl bg-error-container/20 text-error text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-on-surface-variant text-sm">Loading dashboard...</p>
      ) : (
        <section aria-label="Overview stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.key} {...stat} />
          ))}
        </section>
      )}

      <section aria-label="Weekly appointment trends">
        <WeeklyChart />
      </section>

      <section aria-label="Recent appointments">
        <RecentAppointments appointments={appointments} />
      </section>
    </div>
  );
}

export default Dashboard;