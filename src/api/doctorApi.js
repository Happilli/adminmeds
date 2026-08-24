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
