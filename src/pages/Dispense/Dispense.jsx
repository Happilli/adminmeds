import { useEffect, useState } from "react";
import DispenseQueueTable from "../../components/DispenseQueueTable/DispenseQueueTable";
import { getDispenseQueue, markPrescriptionReady, collectPrescription } from "../../api/prescriptionApi";

function Dispense() {
  const [tab, setTab] = useState("pending");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoadingId, setActionLoadingId] = useState(null);

  const token = localStorage.getItem("token");

  const loadQueue = async (status) => {
    try {
      setLoading(true);
      setError("");
      const data = await getDispenseQueue(token, status);
      setItems(data);
    } catch (err) {
      setError(err.message || "Failed to load dispense queue.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQueue(tab);
  }, [tab]);

  const handleAction = async (prescriptionId) => {
    try {
      setActionLoadingId(prescriptionId);
      if (tab === "pending") {
        await markPrescriptionReady(prescriptionId, token);
      } else {
        await collectPrescription(prescriptionId, token);
      }
      await loadQueue(tab);
    } catch (err) {
      setError(err.message || "Action failed.");
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-on-surface mb-1">Dispense Queue</h1>
        <p className="text-on-surface-variant text-sm">
          Prepare and hand over prescribed medicines.
        </p>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-xl bg-error-container/20 text-error text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={() => setTab("pending")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors ${
            tab === "pending"
              ? "bg-primary text-on-primary"
              : "bg-surface-container border border-outline-variant text-on-surface-variant"
          }`}
        >
          Pending Preparation
        </button>
        <button
          onClick={() => setTab("ready")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors ${
            tab === "ready"
              ? "bg-primary text-on-primary"
              : "bg-surface-container border border-outline-variant text-on-surface-variant"
          }`}
        >
          Ready for Collection
        </button>
      </div>

      {loading ? (
        <p className="text-on-surface-variant text-sm">Loading...</p>
      ) : (
        <DispenseQueueTable
          items={items}
          actionLabel={tab === "pending" ? "Mark Ready" : "Mark Collected"}
          onAction={handleAction}
          actionLoadingId={actionLoadingId}
        />
      )}
    </div>
  );
}

export default Dispense;
