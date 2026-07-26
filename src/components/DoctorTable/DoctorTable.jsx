import "./DoctorTable.css";

import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";

function DoctorTable({ doctors, search, setSearch }) {
  return (
    <div className="doctor-table-card">
      <div className="doctor-table-header">
        <h3>Doctors</h3>
        <div className="doctor-search">
          <MagnifyingGlassIcon size={20} />
          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>
                <div className="doctor-info">
                  <div className="doctor-avatar">
                    <UserCircleIcon size={22} />
                  </div>
                  <div>
                    <h4>{doctor.name}</h4>
                    <p>{doctor.email}</p>
                  </div>
                </div>
              </td>
              <td>{doctor.specialization}</td>
              <td>{doctor.experience} yrs</td>
              <td>{doctor.phone}</td>
              <td>
                <span className={`status-badge ${doctor.status.toLowerCase()}`}>
                  {doctor.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button title="View">
                    <EyeIcon size={18} />
                  </button>
                  <button title="Edit">
                    <PencilSimpleIcon size={18} />
                  </button>
                  <button className="delete" title="Delete">
                    <TrashIcon size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorTable;
