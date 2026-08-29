import { apiFetch } from "./client";

export async function getNotifications(token) {
    return apiFetch("/notifications/me", {
        method: "GET",
        token,
    });
}

export async function getUnreadNotificationCount(token) {
    return apiFetch("/notifications/unread-count", {
        method: "GET",
        token,
    });
}

export async function markNotificationAsRead(notificationId, token) {
    return apiFetch(`/notifications/${notificationId}/read`, {
        method: "PATCH",
        token,
    });
}

export async function markAllNotificationsAsRead(token) {
    return apiFetch("/notifications/read-all", {
        method: "PATCH",
        token,
    });
}