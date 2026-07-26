import "./AppointmentToolbar.css";

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
    <div className="appointment-toolbar">
      <div className="toolbar-search">
        <MagnifyingGlassIcon size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search by patient or doctor..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="toolbar-filters">
        <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <div className="date-filter">
          <CalendarIcon size={20} className="calendar-icon" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default AppointmentToolbar;
