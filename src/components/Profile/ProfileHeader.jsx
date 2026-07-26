import {
  PencilSimpleIcon,
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingsIcon,
  CalendarIcon,
} from "@phosphor-icons/react";

function ProfileHeader({ profile, onEdit }) {
  const infoItems = [
    { label: "Email", value: profile.email, icon: EnvelopeIcon },
    { label: "Phone", value: profile.phone, icon: PhoneIcon },
    { label: "Hospital", value: profile.hospital_name, icon: BuildingsIcon },
    { label: "Joined", value: profile.joined_date, icon: CalendarIcon },
  ];

  return (
    <div className="relative bg-surface-container rounded-2xl p-8 border border-outline-variant flex items-center gap-8">
      <button
        onClick={onEdit}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center hover:bg-secondary-container transition-colors"
      >
        <PencilSimpleIcon size={20} />
      </button>

      <div className="relative w-36 h-36 flex-shrink-0">
        <img
          src={
            profile.avatar ||
            "https://ui-avatars.com/api/?name=Hospital+Admin&background=1c2116&color=a2ee4f"
          }
          alt={profile.full_name}
          className="w-full h-full object-cover rounded-full border-4 border-secondary-container"
        />
        <button className="absolute bottom-1.5 right-1.5 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
          <CameraIcon size={18} />
        </button>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-on-surface mb-2">{profile.full_name}</h2>
        <span className="inline-block bg-tertiary-container/20 text-tertiary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          {profile.role}
        </span>

        <div className="grid grid-cols-2 gap-5">
          {infoItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center flex-shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <small className="text-on-surface-variant text-xs block mb-0.5">{label}</small>
                <p className="text-sm font-semibold text-on-surface">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
