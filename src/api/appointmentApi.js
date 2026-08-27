import { apiFetch } from "./client";

export async function getHospitalAppointments(token, filters = {}) {
  const params = new URLSearchParams();

  if (filters.date) {
    params.append("filter_date", filters.date);
  }

  if (filters.status && filters.status !== "All") {
    params.append("status", filters.status.toLowerCase());
  }

  const queryString = params.toString();

  const path = queryString
    ? `/appointments/hospital?${queryString}`
    : "/appointments/hospital";

  return apiFetch(path, { token });
}

export async function getHospitalWeeklyAppointments(token) {
  return apiFetch("/appointments/hospital/weekly", {
    token,
  });
}