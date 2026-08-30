import { createContext, useContext, useEffect, useRef, useState } from "react";
import { notificationSocket } from "../api/wsClient";
import {
  getNotifications,
  getUnreadNotificationCount,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "../api/notificationApi";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notificationsLoaded, setNotificationsLoaded] = useState(false);
  const unsubscribeRef = useRef(null);

  const token = localStorage.getItem("token");

  const refreshUnreadCount = async () => {
    if (!token) return;
    try {
      const data = await getUnreadNotificationCount(token);
      setUnreadCount(data.unread_count);
    } catch (error) {
      console.error("Failed to fetch unread count:", error);
    }
  };

  const refreshNotifications = async () => {
    if (!token) return;
    try {
      const data = await getNotifications(token);
      setNotifications(data);
      setNotificationsLoaded(true);
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  const markAsRead = async (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
    );
    setUnreadCount((prev) => Math.max(prev - 1, 0));

    try {
      await markNotificationAsRead(id, token);
    } catch (error) {
      console.error("Failed to mark as read:", error);
      refreshNotifications();
      refreshUnreadCount();
    }
  };

  const markAllAsRead = async () => {
    if (unreadCount === 0) return;
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
    setUnreadCount(0);

    try {
      await markAllNotificationsAsRead(token);
    } catch (error) {
      console.error("Failed to mark all as read:", error);
      refreshNotifications();
      refreshUnreadCount();
    }
  };

  useEffect(() => {
    if (!token) return;

    notificationSocket.connect(token);
    refreshUnreadCount();

    unsubscribeRef.current = notificationSocket.onNotification((incoming) => {
      setUnreadCount((prev) => prev + 1);
      setNotifications((prev) => [incoming, ...prev]);
    });

    return () => {
      if (unsubscribeRef.current) unsubscribeRef.current();
      notificationSocket.disconnect();
    };
  }, [token]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        notificationsLoaded,
        refreshNotifications,
        markAsRead,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotifications must be used within NotificationProvider");
  return ctx;
}
