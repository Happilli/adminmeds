import { apiFetch } from "./client";

export const loginRequest = (email, password) =>
    apiFetch("/auth/login", { method: "POST", body: { email, password } });

export const forgotPasswordCheck = (email) =>
    apiFetch("/auth/forgot-password/check", { method: "POST", body: { email } });

export const forgotPasswordVerify = ({ email, security_answer, new_password }) =>
    apiFetch("/auth/forgot-password/verify", {
        method: "POST",
        body: { email, security_answer, new_password },
    });