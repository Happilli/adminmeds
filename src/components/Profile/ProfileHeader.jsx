import "./ProfileHeader.css";

import {
  PencilSimpleIcon,
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingsIcon,
  CalendarIcon,
} from "@phosphor-icons/react";

function ProfileHeader({ profile }) {
  return (
    <div className="profile-header">
      <button className="edit-profile-btn">
        <PencilSimpleIcon size={20} />
      </button>

      <div className="profile-left">
        <div className="profile-avatar">
          <img
            src={
              profile.avatar ||
              "https://ui-avatars.com/api/?name=Hospital+Admin&background=EEF2FF&color=4F46E5"
            }
            alt={profile.full_name}
          />
          <button className="camera-btn">
            <CameraIcon size={18} />
          </button>
        </div>
      </div>

      <div className="profile-right">
        <h2>{profile.full_name}</h2>
        <span className="role-badge">{profile.role}</span>

        <div className="profile-info">
          <div className="info-item">
            <EnvelopeIcon size={20} className="info-icon" />
            <div>
              <small>Email</small>
              <p>{profile.email}</p>
            </div>
          </div>

          <div className="info-item">
            <PhoneIcon size={20} className="info-icon" />
            <div>
              <small>Phone</small>
              <p>{profile.phone}</p>
            </div>
          </div>

          <div className="info-item">
            <BuildingsIcon size={20} className="info-icon" />
            <div>
              <small>Hospital</small>
              <p>{profile.hospital_name}</p>
            </div>
          </div>

          <div className="info-item">
            <CalendarIcon size={20} className="info-icon" />
            <div>
              <small>Joined</small>
              <p>{profile.joined_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
