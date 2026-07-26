import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <aside className="sidebar">

      <div>

        <div className="logo-section">

          <h2>MediSync</h2>

          <p>Hospital Admin</p>

        </div>

        <nav className="menu">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <PersonIcon />
            <span>Doctors</span>
          </NavLink>

          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <EventIcon />
            <span>Appointments</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <AccountCircleIcon />
            <span>Profile</span>
          </NavLink>

        </nav>

      </div>

      <button
        className="logout-button"
        onClick={handleLogout}
      >
        <LogoutIcon />
        <span>Logout</span>
      </button>

    </aside>

  );

}

export default Sidebar;