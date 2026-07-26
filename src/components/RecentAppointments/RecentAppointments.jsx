import { useState } from "react";

function RecentAppointments() {
    const [appointments] = useState([
        { id: 1, patient: "Anya Forger", doctor: "Dr. Loid Forger", date: "2026-07-05", time: "10:00 AM", status: "Completed" },
        { id: 2, patient: "Gohan Son", doctor: "Dr. Piccolo", date: "2026-07-05", time: "11:30 AM", status: "Pending" },
        { id: 3, patient: "Alphonse Elric", doctor: "Dr. Edward Elric", date: "2026-07-06", time: "02:00 PM", status: "Cancelled" },
        { id: 4, patient: "Boruto Uzumaki", doctor: "Dr. Naruto Uzumaki", date: "2026-07-06", time: "03:15 PM", status: "Completed" },
    ]);


    const statusStyles = {
        completed: "bg-tertiary-container/20 text-tertiary",
        pending: "bg-secondary-container/40 text-secondary",
        cancelled: "bg-error-container/20 text-error",
    };

    return (
        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant mt-6 overflow-x-auto">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-on-surface">Recent Appointments</h3>
                <button className="bg-primary text-on-primary px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-fixed-dim transition-colors">
                    View All
                </button>
            </div>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-left py-3 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Patient</th>
                        <th className="text-left py-3 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Doctor</th>
                        <th className="text-left py-3 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Date</th>
                        <th className="text-left py-3 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Time</th>
                        <th className="text-left py-3 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{appointment.patient}</td>
                            <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{appointment.doctor}</td>
                            <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{appointment.date}</td>
                            <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{appointment.time}</td>
                            <td className="py-4 px-4 border-b border-outline-variant/50">
                                <span
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${statusStyles[appointment.status.toLowerCase()]
                                        }`}
                                >
                                    {appointment.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentAppointments;