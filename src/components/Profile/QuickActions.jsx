import "./QuickActions.css";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const iconMap = {
  edit_profile: EditOutlinedIcon,
  hospital_information: BusinessOutlinedIcon,
  change_password: LockOutlinedIcon,
  logout: LogoutOutlinedIcon,
};

function QuickActions({ actions, onAction }) {
  return (
    <div className="quick-actions-card">

      <div className="card-header">
        <h2>Quick Actions</h2>
      </div>

      <div className="quick-actions-list">

        {actions.map((item) => {

          const Icon = iconMap[item.key];

          return (

            <button
              key={item.id}
              className="quick-action-item"
              onClick={() => onAction(item.key)}
            >

              <div className="quick-action-left">

                <div className="quick-action-icon">
                  <Icon />
                </div>

                <span>{item.title}</span>

              </div>

              <ChevronRightOutlinedIcon />

            </button>

          );

        })}

      </div>

    </div>
  );
}

export default QuickActions;