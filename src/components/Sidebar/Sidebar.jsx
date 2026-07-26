import { CalendarBlankIcon, SignOutIcon, Square, SquaresFourIcon, UserCircleIcon, UserIcon } from "@phosphor-icons/react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";


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
            <SquaresFourIcon size={22} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <UserIcon size={22} />
            <span>Doctors</span>
          </NavLink>
          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <CalendarBlankIcon size={22} />
            <span>Appointments</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <UserCircleIcon size={22} />
            <span>Profile</span>
          </NavLink>
        </nav>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        <SignOutIcon size={22} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;