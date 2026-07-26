import { CalendarBlankIcon, SignOutIcon, SquaresFourIcon, UserCircleIcon, UserIcon } from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: SquaresFourIcon },
    { to: "/doctors", label: "Doctors", icon: UserIcon },
    { to: "/appointments", label: "Appointments", icon: CalendarBlankIcon },
    { to: "/profile", label: "Profile", icon: UserCircleIcon },
  ];

  return (
    <aside className="w-64 h-screen bg-surface-container-low border-r border-outline-variant flex flex-col justify-between p-4 flex-shrink-0">
      <div>
        <div className="px-2 pb-6 mb-4 border-b border-outline-variant flex items-center gap-3">
          <img src="/logo.png" alt="MediSync" className="w-9 h-9 rounded-lg object-contain" />
          <div>
            <h2 className="text-lg font-semibold text-primary leading-tight">MediSync</h2>
            <p className="text-xs text-on-surface-variant">Hospital Admin</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-error-container text-on-error-container text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <SignOutIcon size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;