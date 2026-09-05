function DispenseQueueTable({ items, actionLabel, onAction, actionLoadingId }) {
  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant overflow-hidden">
      {items.length === 0 ? (
        <p className="text-sm text-on-surface-variant py-12 text-center">
          Nothing here right now.
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
                PATIENT
              </th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
                MEDICINES
              </th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
                REQUESTED
              </th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-on-surface-variant bg-surface-container-high">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.prescription_id}
                className="hover:bg-surface-container-high/50 transition-colors"
              >
                <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                  {item.patient_name}
                </td>
                <td className="py-4 px-6 text-sm text-on-surface border-t border-outline-variant/50">
                  {item.medicine_names.join(", ")}
                </td>
                <td className="py-4 px-6 text-sm text-on-surface-variant border-t border-outline-variant/50">
                  {new Date(item.created_at).toLocaleString()}
                </td>
                <td className="py-4 px-6 border-t border-outline-variant/50">
                  <button
                    type="button"
                    disabled={actionLoadingId === item.prescription_id}
                    onClick={() => onAction(item.prescription_id)}
                    className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-fixed-dim transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {actionLoadingId === item.prescription_id ? "Saving..." : actionLabel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DispenseQueueTable;
