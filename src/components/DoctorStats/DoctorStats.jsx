import {
  UsersThreeIcon,
  ShieldCheckIcon,
  FirstAidKitIcon,
  HospitalIcon,
} from "@phosphor-icons/react";

function DoctorStats() {
  const stats = [
    { title: "Total Doctors", value: 42, icon: UsersThreeIcon, bg: "bg-secondary-container/40", text: "text-secondary" },
    { title: "Active Now", value: 36, icon: ShieldCheckIcon, bg: "bg-tertiary-container/20", text: "text-tertiary" },
    { title: "Surgery Hours", value: "1,240", icon: FirstAidKitIcon, bg: "bg-primary-container/20", text: "text-primary" },
    { title: "On Call", value: "04", icon: HospitalIcon, bg: "bg-error-container/20", text: "text-error" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map(({ title, value, icon: Icon, bg, text }) => (
        <div
          key={title}
          className="bg-surface-container rounded-2xl p-5 border border-outline-variant flex items-center gap-4 hover:-translate-y-1 transition-transform"
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${bg} ${text}`}>
            <Icon size={28} />
          </div>
          <div>
            <p className="text-sm text-on-surface-variant mb-1">{title}</p>
            <h2 className="text-3xl font-bold text-on-surface">{value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorStats;