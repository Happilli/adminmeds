import { useEffect, useState } from "react";
import { getHospitalDashboard } from "../../api/hospitalApi";

function DoctorStats({ doctors }) {
  const totalDoctors = doctors.length;

  const verifiedDoctors = doctors.filter(
    (doctor) => doctor.is_verified
  ).length;

  const statCards = [
    {
      title: "Total Doctors",
      value: totalDoctors,
    },
    {
      title: "Verified Doctors",
      value: verifiedDoctors,
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
            {value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default DoctorStats;