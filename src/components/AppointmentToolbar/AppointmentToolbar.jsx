import { MagnifyingGlassIcon, CalendarIcon } from "@phosphor-icons/react";

function AppointmentToolbar({
  statusFilter,
  onStatusChange,
  selectedDate,
  onDateChange,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-2.5 bg-surface-container border border-outline-variant rounded-xl px-4 h-12 w-full max-w-sm focus-within:border-primary transition-colors">
        <MagnifyingGlassIcon size={20} className="text-outline flex-shrink-0" />
        <input
          type="text"
          placeholder="Search by patient or doctor..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline text-sm"
        />
      </div>

      <div className="flex gap-4">
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-44 h-12 border border-outline-variant rounded-xl px-4 bg-surface-container text-on-surface text-sm cursor-pointer focus:border-primary transition-colors"
        >
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <div className="flex items-center gap-2.5 w-48 h-12 border border-outline-variant rounded-xl bg-surface-container px-4 focus-within:border-primary transition-colors">
          <CalendarIcon size={20} className="text-outline flex-shrink-0" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="flex-1 bg-transparent outline-none text-on-surface text-sm w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AppointmentToolbar;