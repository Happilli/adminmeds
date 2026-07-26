import "./AppointmentStats.css";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

function AppointmentStats({ stats }) {

  const cards = [
    {
      title: "Total Appointments",
      value: stats.total,
      icon: <CalendarMonthRoundedIcon />,
      color: "blue",
    },
    {
      title: "Confirmed",
      value: stats.confirmed,
      icon: <CheckCircleRoundedIcon />,
      color: "green",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <TaskAltRoundedIcon />,
      color: "purple",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <ScheduleRoundedIcon />,
      color: "orange",
    },
    {
      title: "Cancelled",
      value: stats.cancelled,
      icon: <CancelRoundedIcon />,
      color: "red",
    },
  ];

  return (
    <div className="appointment-stats">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`appointment-stat-card ${card.color}`}
        >
          <div className="stat-top">
            <div className={`stat-icon ${card.color}`}>
              {card.icon}
            </div>
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