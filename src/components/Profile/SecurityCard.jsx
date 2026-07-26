import "./SecurityCard.css";

import { LockIcon, KeyIcon, CaretRightIcon } from "@phosphor-icons/react";

function SecurityCard() {
  return (
    <div className="security-card">
      <div className="card-header">
        <h2>Account Security</h2>
      </div>

      <div className="security-info">
        <div className="security-item">
          <div className="security-icon">
            <LockIcon size={24} />
          </div>
          <div className="security-details">
            <small>Current Password</small>
            <p>••••••••••••</p>
          </div>
        </div>

        <div className="security-item">
          <div className="security-icon">
            <KeyIcon size={24} />
          </div>
          <div className="security-details">
            <small>Last Changed</small>
            <p>15 Days Ago</p>
          </div>
        </div>
      </div>

      <button className="change-password-btn">
        <span>Change Password</span>
        <CaretRightIcon size={20} />
      </button>
    </div>
  );
}

export default SecurityCard;
