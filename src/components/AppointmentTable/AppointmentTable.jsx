import { DotsThreeVerticalIcon, EyeIcon } from "@phosphor-icons/react";

function AppointmentTable({ appointments, onViewDetails }) {
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
            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
              TIME
            </th>

            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
              PATIENT
            </th>

            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
              DOCTOR
            </th>

            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
              REASON
            </th>

            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
              STATUS
            </th>

            <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
              ACTION
            </th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr
              key={appointment.id}
              className="hover:bg-surface-container-high/50 transition-colors"
            >
              {/* TIME */}
              <td className="py-4 px-6 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <strong className="text-sm text-on-surface">
                    {appointment.time}
                  </strong>

                  <span className="text-xs text-on-surface-variant mt-0.5">
                    {appointment.date}
                  </span>
                </div>
              </td>

              {/* PATIENT */}
              <td className="py-4 px-6 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <strong className="text-sm text-on-surface">
                    {appointment.patient.name}
                  </strong>

                  <span className="text-xs text-on-surface-variant mt-0.5">
                    {appointment.patient.details}
                  </span>
                </div>
              </td>

              {/* DOCTOR */}
              <td className="py-4 px-6 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <strong className="text-sm text-on-surface">
                    {appointment.doctor.name}
                  </strong>

                  <span className="text-xs text-on-surface-variant mt-0.5">
                    {appointment.doctor.specialization}
                  </span>
                </div>
              </td>

              {/* REASON */}
              <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                {appointment.reason}
              </td>

              {/* STATUS */}
              <td className="py-4 px-6 border-t border-outline-variant/50">
                <span
                  className={`px-3.5 py-1.5 rounded border text-xs font-semibold ${
                    statusStyles[appointment.status.toLowerCase()]
                  }`}
                >
                  {appointment.status.toUpperCase()}
                </span>
              </td>

              {/* ACTION */}
              <td className="py-4 px-6 border-t border-outline-variant/50">
                <button
                  type="button"
                  className="w-9 h-9 cursor-pointer rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
                  onClick={() => onViewDetails(appointment)}
                  title="View Details"
                >
                  <EyeIcon size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;