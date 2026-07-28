import StatCard from "../../components/Statcard/StatCard";
import WeeklyChart from "../../components/WeeklyChart/WeeklyChart";
import RecentAppointments from "../../components/RecentAppointments/RecentAppointments";
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
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const stats = [
    {
      key: "doctors",
      number: "24",
      title: "Doctors",
      subtitle: "Active Doctors",
      icon: <StethoscopeIcon size={24} weight="fill" />,
      percentage: "12%",
      trend: "up",
    },
    {
      key: "patients",
      number: "580",
      title: "Patients",
      subtitle: "Registered Patients",
      icon: <UsersThreeIcon size={24} weight="fill" />,
      percentage: "8%",
      trend: "up",
    },
    {
      key: "appointments",
      number: "34",
      title: "Appointments",
      subtitle: "Bookings Today",
      icon: <CalendarIcon size={24} weight="fill" />,
      percentage: "15%",
      trend: "up",
    },
    {
      key: "consultations",
      number: "20",
      title: "Consultations",
      subtitle: "Completed Today",
      icon: <NotepadIcon size={24} weight="fill" />,
      percentage: "4%",
      trend: "down",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold text-on-surface mb-1">{getGreeting()}, Admin</h1>
          <p className="text-on-surface-variant text-sm">
            Here's what's happening at your hospital today.
          </p>
        </div>
        <p className="text-on-surface-variant text-sm">{today}</p>
      </div>

      <section aria-label="Overview stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.key} {...stat} />
        ))}
      </section>

      <section aria-label="Weekly appointment trends">
        <WeeklyChart />
      </section>

      <section aria-label="Recent appointments">
        <RecentAppointments />
      </section>
    </div>
  );
}

export default Dashboard;