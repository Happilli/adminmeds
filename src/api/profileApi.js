import { apiFetch } from "./client";

export const getProfile = async (token) => {
  return await apiFetch("/hospitals/me", {
    token,
  });
};

export const updateProfile = async (data, token) => {
  return await apiFetch("/hospitals/me", {
    method: "PATCH",
    body: data,
    token,
  });
};

export const uploadHospitalImage = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);

  return await apiFetch("/hospitals/me/image", {
    method: "PATCH",
    body: formData,
    token,
    isForm: true,
  });
};