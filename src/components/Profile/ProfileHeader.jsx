import { useRef } from "react";
import {
  CameraIcon,
  PhoneIcon,
  BuildingsIcon,
  GlobeIcon,
  CheckCircleIcon,
  PencilSimpleIcon,
} from "@phosphor-icons/react";

function ProfileHeader({ profile, onEdit, onImageUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      onImageUpload(file);
    }

    event.target.value = "";
  };

  const backendUrl = import.meta.env.VITE_API_URL.replace("/api/v1", "");

  const imageUrl = profile.image_url
    ? `${backendUrl}${profile.image_url}`
    : "https://placehold.co/200x200?text=Hospital";

  const infoItems = [
    {
      label: "Hospital",
      value: profile.name,
      icon: BuildingsIcon,
    },
    {
      label: "Phone",
      value: profile.phone,
      icon: PhoneIcon,
    },
    {
      label: "Website",
      value: profile.website || "Not Provided",
      icon: GlobeIcon,
    },
    {
      label: "Status",
      value: profile.is_active ? "Active" : "Inactive",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <div className="relative bg-surface-container rounded-2xl border border-outline-variant p-8">

      {/* Edit Button */}
      <button
        onClick={onEdit}
        className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-fixed-dim transition-colors cursor-pointer"
      >
        <PencilSimpleIcon size={18} weight="bold" />
        <span className="text-sm font-medium">Edit</span>
      </button>

      <div className="flex flex-col lg:flex-row items-center gap-8">

        {/* Hospital Image */}
        <div className="relative shrink-0">

          <img
            src={imageUrl}
            alt={profile.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-secondary-container"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            hidden
            onChange={handleFileChange}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-fixed-dim transition-colors cursor-pointer"
            title="Upload Hospital Logo"
          >
            <CameraIcon size={18} weight="bold" />
          </button>

        </div>

        {/* Hospital Details */}
        <div className="flex-1 w-full">

          <h2 className="text-3xl font-semibold text-on-surface">
            {profile.name}
          </h2>

          <p className="text-sm text-on-surface-variant mt-2">
            Manage your hospital profile and branding information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

            {infoItems.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-xs text-on-surface-variant mb-1">
                    {label}
                  </p>

                  <p className="text-sm font-semibold text-on-surface break-all">
                    {value}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;