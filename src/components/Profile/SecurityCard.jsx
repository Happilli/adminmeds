import "./SecurityCard.css";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

function SecurityCard() {
  return (
    <div className="security-card">

      <div className="card-header">
        <h2>Account Security</h2>
      </div>

      <div className="security-info">

        <div className="security-item">

          <div className="security-icon">
            <LockOutlinedIcon />
          </div>

          <div className="security-details">
            <small>Current Password</small>
            <p>••••••••••••</p>
          </div>

        </div>

        <div className="security-item">

          <div className="security-icon">
            <KeyOutlinedIcon />
          </div>

          <div className="security-details">
            <small>Last Changed</small>
            <p>15 Days Ago</p>
          </div>

        </div>

      </div>

      <button className="change-password-btn">

        <span>Change Password</span>

        <ChevronRightOutlinedIcon />

      </button>

    </div>
  );
}

export default SecurityCard;