import {
  CalendarBlankIcon,
  CheckCircleIcon,
  CheckSquareIcon,
  ClockIcon,
  XCircleIcon,
} from "@phosphor-icons/react";

function AppointmentStats({ stats }) {
  const cards = [
    { title: "Total Appointments", value: stats.total, icon: CalendarBlankIcon, bg: "bg-secondary-container/40", text: "text-secondary" },
    { title: "Confirmed", value: stats.confirmed, icon: CheckCircleIcon, bg: "bg-tertiary-container/20", text: "text-tertiary" },
    { title: "Completed", value: stats.completed, icon: CheckSquareIcon, bg: "bg-primary-container/20", text: "text-primary" },
    { title: "Pending", value: stats.pending, icon: ClockIcon, bg: "bg-secondary-container/40", text: "text-secondary-fixed" },
    { title: "Cancelled", value: stats.cancelled, icon: XCircleIcon, bg: "bg-error-container/20", text: "text-error" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
      {cards.map(({ title, value, icon: Icon, bg, text }) => (
        <div
          key={title}
          className="bg-surface-container rounded-2xl p-5 border border-outline-variant hover:-translate-y-1 transition-transform"
        >
          <div className="flex justify-end mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${text}`}>
              <Icon size={24} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-on-surface">{value}</h2>
          <p className="text-sm text-on-surface-variant mt-2">{title}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentStats;