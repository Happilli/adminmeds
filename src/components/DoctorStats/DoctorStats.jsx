import "./DoctorStats.css";

import {
  UsersThreeIcon,
  ShieldCheckIcon,
  FirstAidKitIcon,
  HospitalIcon,
} from "@phosphor-icons/react";

function DoctorStats() {
  const stats = [
    {
      title: "Total Doctors",
      value: 42,
      icon: <UsersThreeIcon size={28} />,
      color: "#EEF2FF",
      iconColor: "#4F46E5",
    },
    {
      title: "Active Now",
      value: 36,
      icon: <ShieldCheckIcon size={28} />,
      color: "#ECFDF5",
      iconColor: "#10B981",
    },
    {
      title: "Surgery Hours",
      value: "1,240",
      icon: <FirstAidKitIcon size={28} />,
      color: "#EFF6FF",
      iconColor: "#3B82F6",
    },
    {
      title: "On Call",
      value: "04",
      icon: <HospitalIcon size={28} />,
      color: "#FEF2F2",
      iconColor: "#EF4444",
    },
  ];

  return (
    <div className="doctor-stats">
      {stats.map((stat, index) => (
        <div className="doctor-stat-card" key={index}>
          <div
            className="doctor-stat-icon"
            style={{ background: stat.color, color: stat.iconColor }}
          >
            {stat.icon}
          </div>
          <div className="doctor-stat-info">
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorStats;