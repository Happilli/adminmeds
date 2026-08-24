import { useEffect, useState } from "react";
import { getHospitalDashboard } from "../../api/hospitalApi";

function DoctorStats() {
  const [stats, setStats] = useState({
    totalDoctors: 0,
    verifiedDoctors: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const data = await getHospitalDashboard(token);

        setStats({
          totalDoctors: data.total_doctors,
          verifiedDoctors: data.verified_doctors,
        });
      } catch (error) {
        console.error("Failed to load doctor statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const statCards = [
    {
      title: "Total Doctors",
      value: stats.totalDoctors,
    },
    {
      title: "Verified Doctors",
      value: stats.verifiedDoctors,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
      {statCards.map(({ title, value }) => (
        <div
          key={title}
          className="bg-surface-container rounded-2xl p-5 border border-outline-variant
          hover:border-primary/40 transition-colors"
        >
          <p className="text-sm text-on-surface-variant mb-1">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-on-surface">
            {loading ? "—" : value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default DoctorStats;