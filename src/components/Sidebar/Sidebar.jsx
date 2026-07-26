import { useEffect, useState } from "react";
import {
  CalendarBlankIcon,
  SquaresFourIcon,
  StethoscopeIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: SquaresFourIcon },
  { to: "/doctors", label: "Doctors", icon: StethoscopeIcon },
  { to: "/appointments", label: "Appointments", icon: CalendarBlankIcon },
  { to: "/profile", label: "Profile", icon: UserIcon },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };



  const ITEM_HEIGHT = 46;
  const ITEM_GAP = 6;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = navItems.findIndex((item) => location.pathname.startsWith(item.to));
    if (index !== -1) setActiveIndex(index);
  }, [location.pathname]);

  return (
    <aside className="w-72 h-screen bg-surface-container-low border-r border-outline-variant flex flex-col shrink-0 overflow-hidden">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-7">
        <img
          src="/logo.png"
          alt="MediSync"
          className="w-10 h-10 rounded-xl object-contain"
        />
        <div>
          <h2 className="text-lg font-semibold text-on-surface leading-tight">
            MediSync
          </h2>
          <p className="text-xs text-on-surface-variant">Hospital Admin</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 pt-6">
        <p className="px-3 mb-3 text-xs font-semibold tracking-wide text-on-surface-variant/70 uppercase">
          Menu
        </p>

        <div className="relative flex flex-col gap-1.5">
          {/* Sliding active indicator */}
          <div
            className="absolute left-0 w-full bg-primary rounded-xl pointer-events-none"
            style={{
              height: `${ITEM_HEIGHT}px`,
              transform: `translateY(${activeIndex * (ITEM_HEIGHT + ITEM_GAP)}px)`,
              transition: "transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1)",
            }}
          />

          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative z-10 flex items-center gap-3.5 px-3.5 text-sm font-medium transition-colors duration-200 ${isActive
                  ? "text-on-primary"
                  : "text-on-surface-variant hover:text-on-surface"
                }`
              }
              style={{ height: `${ITEM_HEIGHT}px` }}
            >
              <Icon size={20} weight="regular" />
              <span className="flex-1">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer / account */}
      <div className="px-4 pb-5 pt-3">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div
            className="w-9 h-9 shrink-0 border-2 border-secondary-container overflow-hidden bg-surface-container-high"
            style={{ borderRadius: "46% 54% 61% 39% / 55% 43% 57% 45%" }}
          >
            <img
              src="/logo.png"
              alt="Admin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-on-surface leading-tight truncate">
              Admin
            </h4>
            <p className="text-xs text-on-surface-variant truncate">
              Administrator
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="group relative cursor-pointer w-full flex
           items-center justify-center gap-2.5 px-4 py-3 border border-error
            text-error text-sm font-semibold overflow-hidden transition-all duration-300 
            ease-out hover:scale-[1.02] active:scale-[0.98] hover:bg-error hover:text-on-error hover:border-error"
          style={{
            borderRadius: "24px 24px 24px 24px",
            transition: "border-radius 0.4s ease, transform 0.2s ease, background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderRadius = "8px 28px 8px 28px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderRadius = "24px 24px 24px 24px";
          }}
        >
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;