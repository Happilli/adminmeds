import "./HospitalInfoCard.css";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function HospitalInfoCard({ hospital }) {

  const hospitalInfo = [

    {
      label: "Hospital Name",
      value: hospital.hospital_name,
      icon: BusinessOutlinedIcon,
    },

    {
      label: "Registration Number",
      value: hospital.registration_number,
      icon: BadgeOutlinedIcon,
    },

    {
      label: "Hospital Email",
      value: hospital.hospital_email,
      icon: EmailOutlinedIcon,
    },

    {
      label: "Hospital Phone",
      value: hospital.hospital_phone,
      icon: PhoneOutlinedIcon,
    },

    {
      label: "Website",
      value: hospital.website || "Not Provided",
      icon: LanguageOutlinedIcon,
    },

    {
      label: "Address",
      value: hospital.address,
      icon: LocationOnOutlinedIcon,
    },

  ];

  return (

    <div className="hospital-info-card">

      <div className="card-header">

        <h2>Hospital Information</h2>

      </div>

      <div className="hospital-info-list">

        {hospitalInfo.map((item) => {

          const Icon = item.icon;

          return (

            <div
              className="hospital-info-item"
              key={item.label}
            >

              <div className="hospital-icon">

                <Icon />

              </div>

              <div className="hospital-details">

                <small>{item.label}</small>

                <p>{item.value}</p>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default HospitalInfoCard;