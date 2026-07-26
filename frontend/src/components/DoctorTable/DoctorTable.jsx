import "./DoctorTable.css";

import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function DoctorTable({
  doctors,
  search,
  setSearch,
}) {

  return (

    <div className="doctor-table-card">

      <div className="doctor-table-header">

        <h3>Doctors</h3>

        <div className="doctor-search">

          <SearchIcon />

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

                    <PersonOutlineOutlinedIcon />

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

                <span
                  className={`status-badge ${doctor.status.toLowerCase()}`}
                >
                  {doctor.status}
                </span>

              </td>

              <td>

                <div className="action-buttons">

                  <button title="View">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </button>

                  <button title="Edit">
                    <EditOutlinedIcon fontSize="small" />
                  </button>

                  <button
                    className="delete"
                    title="Delete"
                  >
                    <DeleteOutlineOutlinedIcon fontSize="small" />
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