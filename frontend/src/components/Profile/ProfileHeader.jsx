import "./ProfileHeader.css";

import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function ProfileHeader({ profile }) {

  return (

    <div className="profile-header">

      <button className="edit-profile-btn">

        <EditIcon />

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

            <CameraAltIcon />

          </button>

        </div>

      </div>

      <div className="profile-right">

        <h2>{profile.full_name}</h2>

        <span className="role-badge">

          {profile.role}

        </span>

        <div className="profile-info">

          <div className="info-item">

            <EmailOutlinedIcon className="info-icon" />

            <div>

              <small>Email</small>

              <p>{profile.email}</p>

            </div>

          </div>

          <div className="info-item">

            <PhoneOutlinedIcon className="info-icon" />

            <div>

              <small>Phone</small>

              <p>{profile.phone}</p>

            </div>

          </div>

          <div className="info-item">

            <BusinessOutlinedIcon className="info-icon" />

            <div>

              <small>Hospital</small>

              <p>{profile.hospital_name}</p>

            </div>

          </div>

          <div className="info-item">

            <CalendarTodayOutlinedIcon className="info-icon" />

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