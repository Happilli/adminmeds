import "./AppointmentStats.css";

import {
  CalendarBlankIcon,
  CheckCircleIcon,
  CheckSquareIcon,
  ClockIcon,
  XCircleIcon,
} from "@phosphor-icons/react";

function AppointmentStats({ stats }) {
  const cards = [
    {
      title: "Total Appointments",
      value: stats.total,
      icon: <CalendarBlankIcon size={24} />,
      color: "blue",
    },
    {
      title: "Confirmed",
      value: stats.confirmed,
      icon: <CheckCircleIcon size={24} />,
      color: "green",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <CheckSquareIcon size={24} />,
      color: "purple",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <ClockIcon size={24} />,
      color: "orange",
    },
    {
      title: "Cancelled",
      value: stats.cancelled,
      icon: <XCircleIcon size={24} />,
      color: "red",
    },
  ];

  return (
    <div className="appointment-stats">
      {cards.map((card) => (
        <div key={card.title} className={`appointment-stat-card ${card.color}`}>
          <div className="stat-top">
            <div className={`stat-icon ${card.color}`}>{card.icon}</div>
          </div>
          <div className="stat-content">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentStats;
