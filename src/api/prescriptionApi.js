import { apiFetch } from "./client";

export const getDispenseQueue = (token, status = "pending") =>
  apiFetch(`/prescriptions/dispense-queue?status=${status}`, { token });

export const markPrescriptionReady = (prescriptionId, token) =>
  apiFetch(`/prescriptions/${prescriptionId}/mark-ready`, {
    method: "PATCH",
    token,
  });

export const collectPrescription = (prescriptionId, token) =>
  apiFetch(`/prescriptions/${prescriptionId}/collect`, {
    method: "PATCH",
    token,
  });
