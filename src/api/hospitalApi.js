import { apiFetch } from "./client";

export const getHospitalDashboard = (token) =>
  apiFetch("/hospitals/me", {
    method: "GET",
    token,
  });

export const updateHospitalProfile = (data, token) =>
  apiFetch("/hospitals/me", {
    method: "PATCH",
    body: data,
    token,
  });

export const getHospitalAppointments = (token) =>
  apiFetch("/appointments/hospital", {
    method: "GET",
    token,
  });