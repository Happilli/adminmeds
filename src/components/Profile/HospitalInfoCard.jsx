import "./HospitalInfoCard.css";

import {
  BuildingsIcon,
  IdentificationCardIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeIcon,
  MapPinIcon,
} from "@phosphor-icons/react";

function HospitalInfoCard({ hospital }) {
  const hospitalInfo = [
    { label: "Hospital Name", value: hospital.hospital_name, icon: BuildingsIcon },
    { label: "Registration Number", value: hospital.registration_number, icon: IdentificationCardIcon },
    { label: "Hospital Email", value: hospital.hospital_email, icon: EnvelopeIcon },
    { label: "Hospital Phone", value: hospital.hospital_phone, icon: PhoneIcon },
    { label: "Website", value: hospital.website || "Not Provided", icon: GlobeIcon },
    { label: "Address", value: hospital.address, icon: MapPinIcon },
  ];

  return (
    <div className="hospital-info-card">
      <div className="card-header">
        <h2>Hospital Information</h2>
      </div>

      <div className="hospital-info-list">
        {hospitalInfo.map((item) => {
          const IconComp = item.icon;
          return (
            <div className="hospital-info-item" key={item.label}>
              <div className="hospital-icon">
                <IconComp size={22} />
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
