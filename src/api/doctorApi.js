import { apiFetch } from "./client";

// Get doctors for the logged-in hospital
export async function getDoctors(token) {
  return apiFetch("/doctors/mine", {
    token,
  });
}

// Register a new doctor
export async function registerDoctor(formData, token) {
  return apiFetch("/doctors/register", {
    method: "POST",
    body: formData,
    token,
    isForm: true,
  });
}

// Get a single doctor
export async function getDoctor(doctorId, token) {
  return apiFetch(`/doctors/${doctorId}`, {
    token,
  });
}

// Update doctor from Hospital Admin
export async function updateDoctor(
  doctorId,
  data,
  token
) {
  return apiFetch(`/doctors/${doctorId}`, {
    method: "PATCH",
    body: data,
    token,
  });
}

// Delete doctor from Hospital Admin
export async function deleteDoctor(
  doctorId,
  token
) {
  return apiFetch(`/doctors/${doctorId}`, {
    method: "DELETE",
    token,
  });
}