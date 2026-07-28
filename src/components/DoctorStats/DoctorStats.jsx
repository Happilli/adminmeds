import {
  UsersThreeIcon,
  ShieldCheckIcon,
  FirstAidKitIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import doctors from "../../data/doctors";

function DoctorStats() {
  const total = doctors.length;
  const active = doctors.filter((d) => d.status === "Active").length;

  const stats = [
    { title: "Total Doctors", value: total, icon: UsersThreeIcon, bg: "bg-secondary-container/40", text: "text-secondary" },
    { title: "Active Now", value: active, icon: ShieldCheckIcon, bg: "bg-tertiary-container/20", text: "text-tertiary" },
    { title: "Surgery Hours", value: "1,240", icon: FirstAidKitIcon, bg: "bg-primary-container/20", text: "text-primary" },
    { title: "On Call", value: "04", icon: PhoneIcon, bg: "bg-error-container/20", text: "text-error" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map(({ title, value, icon: Icon, bg, text }) => (
        <div
          key={title}
          className="bg-surface-container rounded-2xl p-5 border border-outline-variant
           hover:border-primary/40 transition-colors flex items-center gap-4"
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${bg} ${text}`}>
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