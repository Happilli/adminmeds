import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";

function DoctorTable({ doctors, search, setSearch }) {
  const statusStyles = {
    active: "bg-tertiary-container/20 text-tertiary",
    inactive: "bg-error-container/20 text-error",
  };

  return (
    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-on-surface">Doctors</h3>
        <div className="flex items-center gap-2 bg-surface-container-high border border-outline-variant rounded-xl px-4 py-2.5 w-72">
          <MagnifyingGlassIcon size={20} className="text-outline" />
          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline text-sm"
          />
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Doctor</th>
            <th className="text-left py-4 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Specialization</th>
            <th className="text-left py-4 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Experience</th>
            <th className="text-left py-4 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Contact</th>
            <th className="text-left py-4 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Status</th>
            <th className="text-left py-4 px-4 text-sm text-on-surface-variant border-b border-outline-variant">Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td className="py-4 px-4 border-b border-outline-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center text-secondary-fixed flex-shrink-0">
                    <UserCircleIcon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">{doctor.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">{doctor.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{doctor.specialization}</td>
              <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{doctor.experience} yrs</td>
              <td className="py-4 px-4 text-sm text-on-surface border-b border-outline-variant/50">{doctor.phone}</td>
              <td className="py-4 px-4 border-b border-outline-variant/50">
                <span
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${statusStyles[doctor.status.toLowerCase()]
                    }`}
                >
                  {doctor.status}
                </span>
              </td>
              <td className="py-4 px-4 border-b border-outline-variant/50">
                <div className="flex items-center gap-2">
                  <button
                    title="View"
                    className="w-9 h-9 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                  >
                    <EyeIcon size={18} />
                  </button>
                  <button
                    title="Edit"
                    className="w-9 h-9 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                  >
                    <PencilSimpleIcon size={18} />
                  </button>
                  <button
                    title="Delete"
                    className="w-9 h-9 rounded-lg bg-error-container/20 text-error flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                  >
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