import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import appointments from "../../data/appointments";

const statusStyles = {
    confirmed: "bg-tertiary-container/20 text-tertiary",
    completed: "bg-secondary-container/40 text-secondary",
    pending: "bg-primary-container/20 text-primary",
    cancelled: "bg-error-container/20 text-error",
};

function RecentAppointments() {
    const navigate = useNavigate();
    const recentAppointments = appointments.slice(0, 5);

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-2xl font-semibold text-on-surface">Recent Appointments</h3>
            </div>

            <div className="bg-surface-container rounded-2xl border border-outline-variant overflow-hidden">
                {recentAppointments.length === 0 ? (
                    <p className="text-sm text-on-surface-variant py-12 text-center">
                        No recent appointments to show.
                    </p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">PATIENT</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">DOCTOR</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">DATE</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">TIME</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentAppointments.map((appointment) => (
                                <tr key={appointment.id} className="hover:bg-surface-container-high/50 transition-colors">
                                    <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                                        {appointment.patient.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                                        {appointment.doctor.name}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                                        {appointment.date}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                                        {appointment.time}
                                    </td>
                                    <td className="py-4 px-6 border-t border-outline-variant/50">
                                        <span
                                            className={`px-3.5 py-1.5 border rounded-xl text-xs font-semibold ${statusStyles[appointment.status.toLowerCase()]
                                                }`}
                                        >
                                            {appointment.status.toUpperCase()}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <button
                onClick={() => navigate("/appointments")}
                className="self-end flex items-center gap-1.5  cursor-pointer
                text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
                <ArrowRightIcon size={24} weight="bold" />
            </button>
        </div>
    );
}

export default RecentAppointments;