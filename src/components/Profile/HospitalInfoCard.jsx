import {
  BuildingsIcon,
  IdentificationCardIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeIcon,
  MapPinIcon,
  PencilSimpleIcon,
} from "@phosphor-icons/react";

function HospitalInfoCard({ hospital, onEdit }) {
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
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-on-surface">Hospital Information</h2>
        <button
          onClick={onEdit}
          className="w-9 h-9 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center hover:bg-secondary-container transition-colors cursor-pointer"
        >
          <PencilSimpleIcon size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {hospitalInfo.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
                <IconComp size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <small className="text-on-surface-variant text-xs">{item.label}</small>
                <p className="text-sm font-semibold text-on-surface wrap-break-word">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HospitalInfoCard;