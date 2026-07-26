import "./QuickActions.css";

import {
  PencilSimpleIcon,
  BuildingsIcon,
  LockIcon,
  SignOutIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

const iconMap = {
  edit_profile: PencilSimpleIcon,
  hospital_information: BuildingsIcon,
  change_password: LockIcon,
  logout: SignOutIcon,
};

function QuickActions({ actions, onAction }) {
  return (
    <div className="quick-actions-card">
      <div className="card-header">
        <h2>Quick Actions</h2>
      </div>

      <div className="quick-actions-list">
        {actions.map((item) => {
          const IconComp = iconMap[item.key];
          return (
            <button key={item.id} className="quick-action-item" onClick={() => onAction(item.key)}>
              <div className="quick-action-left">
                <div className="quick-action-icon">
                  <IconComp size={22} />
                </div>
                <span>{item.title}</span>
              </div>
              <CaretRightIcon size={20} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
