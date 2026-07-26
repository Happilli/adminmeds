import "./DoctorStats.css";

import GroupsIcon from "@mui/icons-material/Groups";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

function DoctorStats() {

  const stats = [
    {
      title: "Total Doctors",
      value: 42,
      icon: <GroupsIcon />,
      color: "#EEF2FF",
      iconColor: "#4F46E5",
    },
    {
      title: "Active Now",
      value: 36,
      icon: <VerifiedUserIcon />,
      color: "#ECFDF5",
      iconColor: "#10B981",
    },
    {
      title: "Surgery Hours",
      value: "1,240",
      icon: <MedicalServicesIcon />,
      color: "#EFF6FF",
      iconColor: "#3B82F6",
    },
    {
      title: "On Call",
      value: "04",
      icon: <LocalHospitalIcon />,
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
            style={{
              background: stat.color,
              color: stat.iconColor,
            }}
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