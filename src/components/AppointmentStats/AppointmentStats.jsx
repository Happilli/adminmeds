function AppointmentStats({ stats }) {
  const cards = [
    { title: "Total Appointments", value: stats.total },
    { title: "Confirmed", value: stats.confirmed },
    { title: "Completed", value: stats.completed },
    { title: "Pending", value: stats.pending },
    { title: "Cancelled", value: stats.cancelled },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
      {cards.map(({ title, value }) => (
        <div
          key={title}
          className="bg-surface-container rounded-2xl p-5 border border-outline-variant
           hover:border-primary/40 transition-colors"
        >
          <h2 className="text-3xl font-bold text-on-surface">{value}</h2>
          <p className="text-sm text-on-surface-variant mt-2">{title}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentStats;