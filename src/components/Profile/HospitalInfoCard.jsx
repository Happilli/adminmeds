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
    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant flex flex-col gap-6">
      <div className="pb-4 border-b border-outline-variant">
        <h2 className="text-lg font-semibold text-on-surface">Hospital Information</h2>
      </div>

      <div className="flex flex-col gap-5">
        {hospitalInfo.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center flex-shrink-0">
                <IconComp size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <small className="text-on-surface-variant text-xs">{item.label}</small>
                <p className="text-sm font-semibold text-on-surface break-words">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HospitalInfoCard;