import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";

const statusStyles = {
  active: "bg-tertiary-container/20 text-tertiary",
  inactive: "bg-error-container/20 text-error",
};

function DoctorTable({ doctors, search, setSearch, onDelete, onToggleStatus }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-on-surface">Doctors</h3>
        <div
          className="group flex items-center gap-2 bg-surface-container border border-outline-variant
           rounded-xl px-4 py-2.5 w-56 focus-within:w-80 
            transition-all duration-500 ease-in-out"
        >
          <MagnifyingGlassIcon
            size={20}
            className="shrink-0 text-outline group-focus-within:text-on-surface transition-colors duration-300"
          />
          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-on-surface-variant group-focus-within:text-on-surface
             placeholder:text-outline text-sm min-w-0 transition-colors duration-300"
          />
        </div>
      </div>

      <div className="bg-surface-container rounded-2xl border border-outline-variant overflow-hidden">
        {doctors.length === 0 ? (
          <p className="text-sm text-on-surface-variant py-12 text-center">
            {search ? `No doctors match "${search}".` : "No doctors added yet."}
          </p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">DOCTOR</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">SPECIALIZATION</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">EXPERIENCE</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">CONTACT</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">STATUS</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="py-4 px-6 border-t border-outline-variant/50">
                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-on-surface">{doctor.name}</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">{doctor.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">{doctor.specialization}</td>
                  <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">{doctor.experience} yrs</td>
                  <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">{doctor.phone}</td>
                  <td className="py-4 px-6 border-t border-outline-variant/50">
                    <span className={`px-3.5 py-1.5 rounded border text-xs font-semibold ${statusStyles[doctor.status.toLowerCase()]}`}>
                      {doctor.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6 border-t border-outline-variant/50">
                    <div className="flex items-center gap-2">
                      <button
                        title="Toggle active status"
                        onClick={() => onToggleStatus(doctor.id)}
                        className="w-9 h-9 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                      >
                        <EyeIcon size={18} />
                      </button>
                      <button
                        title="Edit (coming soon)"
                        disabled
                        className="w-9 h-9 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center opacity-40 cursor-not-allowed"
                      >
                        <PencilSimpleIcon size={18} />
                      </button>
                      <button
                        title="Delete"
                        onClick={() => onDelete(doctor.id)}
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
        )}
      </div>
    </div>
  );
}

export default DoctorTable;