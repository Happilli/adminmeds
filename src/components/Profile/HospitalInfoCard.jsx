import {
  BuildingsIcon,
  IdentificationCardIcon,
  PhoneIcon,
  GlobeIcon,
  MapPinIcon,
 FileTextIcon,
} from "@phosphor-icons/react";

function HospitalInfoCard({ hospital }) {
  const hospitalInfo = [
    {
      label: "Hospital Name",
      value: hospital.name,
      icon: BuildingsIcon,
    },
    {
      label: "Registration Number",
      value: hospital.registration_number,
      icon: IdentificationCardIcon,
    },
    {
      label: "Phone Number",
      value: hospital.phone,
      icon: PhoneIcon,
    },
    {
      label: "Website",
      value: hospital.website || "Not Provided",
      icon: GlobeIcon,
    },
    {
      label: "Address",
      value: hospital.address,
      icon: MapPinIcon,
    },
    {
      label: "Description",
      value:
        hospital.description ||
        "No hospital description has been provided.",
      icon: FileTextIcon,
    },
  ];

  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant p-6">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-on-surface">
          Hospital Information
        </h2>

        <p className="text-sm text-on-surface-variant mt-1">
          General information about your hospital.
        </p>
      </div>

      {/* Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {hospitalInfo.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
              <Icon size={20} />
            </div>

            <div className="flex-1">

              <p className="text-xs text-on-surface-variant uppercase tracking-wide mb-1">
                {label}
              </p>

              <p className="text-sm font-medium text-on-surface wrap-break-words">
                {value}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default HospitalInfoCard;