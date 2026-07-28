const BASE_URL = import.meta.env.VITE_API_URL
export async function apiFetch(path, { method = "GET", body, token, isForm = false }) {
    const headers = {};
    if (!isForm) {
        headers["Content-Type"] = "application/json";
    }
    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }

    const res = await fetch(`${BASE_URL}${path}`, {
        method, headers, body: body ? (isForm ? body : JSON.stringify(body)) : undefined,
    });

    let data = null;
    try {
        data = await res.json();
    } catch {
    }
    if (!res.ok) {
        const message = data?.detail || "Something went wrong..";
        throw new Error(typeof message === "string" ? message : JSON.stringify(message));
    }
    return data;
}
