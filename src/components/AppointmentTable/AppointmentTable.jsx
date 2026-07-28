import { useState, useRef, useEffect } from "react";
import { DotsThreeVerticalIcon, EyeIcon, PencilSimpleIcon } from "@phosphor-icons/react";

function AppointmentTable({ appointments, onViewDetails, onUpdateStatus }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuToggle = (appointmentId) => {
    setOpenMenuId((prev) => (prev === appointmentId ? null : appointmentId));
  };

  const handleViewDetailsClick = (appointment) => {
    onViewDetails(appointment);
    setOpenMenuId(null);
  };

  const handleUpdateStatusClick = (appointment) => {
    onUpdateStatus(appointment);
    setOpenMenuId(null);
  };

  const statusStyles = {
    confirmed: "bg-tertiary-container/20 text-tertiary",
    completed: "bg-secondary-container/40 text-secondary",
    pending: "bg-primary-container/20 text-primary",
    cancelled: "bg-error-container/20 text-error",
  };

  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">TIME</th>
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">PATIENT</th>
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">DOCTOR</th>
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">REASON</th>
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">STATUS</th>
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-surface-container-high/50 transition-colors">
              <td className="py-4 px-6 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <strong className="text-sm text-on-surface">{appointment.time}</strong>
                  <span className="text-xs text-on-surface-variant mt-0.5">{appointment.date}</span>
                </div>
              </td>

              <td className="py-4 px-6 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <strong className="text-sm text-on-surface">{appointment.patient.name}</strong>
                  <span className="text-xs text-on-surface-variant mt-0.5">{appointment.patient.details}</span>
                </div>
              </td>

              <td className="py-4 px-6 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <strong className="text-sm text-on-surface">{appointment.doctor.name}</strong>
                  <span className="text-xs text-on-surface-variant mt-0.5">{appointment.doctor.specialization}</span>
                </div>
              </td>

              <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">{appointment.reason}</td>

              <td className="py-4 px-6 border-t border-outline-variant/50">
                <span
                  className={`px-3.5 py-1.5 rounded border text-xs font-semibold ${statusStyles[appointment.status.toLowerCase()]
                    }`}
                >
                  {appointment.status.toUpperCase()}
                </span>
              </td>

              <td className="py-4 px-6 border-t border-outline-variant/50 relative">
                <button
                  className="w-9 h-9  cursor-pointer rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
                  onClick={() => handleMenuToggle(appointment.id)}
                >
                  <DotsThreeVerticalIcon size={20} />
                </button>

                {openMenuId === appointment.id && (
                  <div
                    ref={menuRef}
                    className="absolute right-6 top-full z-20 mt-1 min-w-42.5 bg-surface-container-high border border-outline-variant rounded-xl shadow-lg p-1.5 flex flex-col"
                  >
                    <button
                      className="flex items-center cursor-pointer gap-2.5 px-3 py-2.5 rounded-lg text-sm text-on-surface hover:bg-surface-container-highest transition-colors text-left"
                      onClick={() => handleViewDetailsClick(appointment)}
                    >
                      <EyeIcon size={18} />
                      View Details
                    </button>
                    <button
                      className="flex  cursor-pointer items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-on-surface hover:bg-surface-container-highest transition-colors text-left"
                      onClick={() => handleUpdateStatusClick(appointment)}
                    >
                      <PencilSimpleIcon size={18} />
                      Update Status
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;