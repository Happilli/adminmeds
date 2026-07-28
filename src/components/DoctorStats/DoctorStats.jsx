import doctors from "../../data/doctors";

function DoctorStats() {
  const total = doctors.length;
  const active = doctors.filter((d) => d.status === "Active").length;

  const stats = [
    { title: "Total Doctors", value: total },
    { title: "Active Now", value: active },
    { title: "Surgery Hours", value: "1,240" },
    { title: "On Call", value: "04" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map(({ title, value }) => (
        <div
          key={title}
          className="bg-surface-container rounded-2xl p-5 border border-outline-variant
           hover:border-primary/40 transition-colors"
        >
          <p className="text-sm text-on-surface-variant mb-1">{title}</p>
          <h2 className="text-3xl font-bold text-on-surface">{value}</h2>
        </div>
      ))}
    </div>
  );
}

export default DoctorStats;