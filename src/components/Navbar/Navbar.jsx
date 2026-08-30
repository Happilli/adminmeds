import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon, BellIcon } from "@phosphor-icons/react";
import { useNotifications } from "../../context/NotificationContext";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const notificationListRef = useRef(null);

  const {
    notifications,
    unreadCount,
    notificationsLoaded,
    refreshNotifications,
    markAsRead,
    markAllAsRead,
  } = useNotifications();

  useEffect(() => {
    if (showNotifications && !notificationsLoaded) {
      refreshNotifications();
    }
  }, [showNotifications, notificationsLoaded]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const list = notificationListRef.current;
    if (!list) return;
    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      list.scrollTop += e.deltaY;
    };
    list.addEventListener("wheel", handleWheel, { passive: false });
    return () => list.removeEventListener("wheel", handleWheel);
  }, [showNotifications, notifications]);

  return (
    <nav className="h-24 flex items-center justify-between px-8 bg-surface">
      <div className="group flex items-center gap-3 bg-surface-container rounded-full px-4 py-3 w-64 focus-within:w-full max-w-md border border-outline-variant transition-all duration-500 ease-in-out">
        <MagnifyingGlassIcon size={20} className="shrink-0 text-outline group-focus-within:text-on-surface transition-colors duration-300" />
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 bg-transparent outline-none text-on-surface-variant group-focus-within:text-on-surface placeholder:text-outline text-sm min-w-0 transition-colors duration-300"
        />
      </div>

      <div className="relative" ref={notificationRef}>
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => setShowNotifications((prev) => !prev)}
          className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-primary transition-all duration-200"
        >
          <BellIcon size={24} weight="fill" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-error text-white text-[10px] font-semibold flex items-center justify-center border-2 border-surface">
              {unreadCount}
            </span>
          )}
        </button>

        {showNotifications && (
          <div className="absolute right-0 top-14 w-96 bg-surface rounded-2xl border border-outline-variant shadow-[0_12px_35px_rgba(0,0,0,0.15)] overflow-hidden z-50">
            <div className="flex items-center justify-between px-5 py-4 bg-surface-container border-b border-outline-variant">
              <div>
                <h3 className="text-base font-semibold text-on-surface">Notifications</h3>
                <p className="text-xs text-on-surface-variant mt-1">{notifications.length} notifications</p>
              </div>

              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Mark all as read
                </button>
              )}
            </div>

            <div ref={notificationListRef} className="max-h-105 overflow-y-auto overscroll-contain">
              {!notificationsLoaded ? (
                <div className="px-5 py-10 text-center">
                  <p className="text-sm text-on-surface-variant">Loading notifications...</p>
                </div>
              ) : notifications.length > 0 ? (
                notifications.map((notification) => (
                  <button
                    key={notification.id}
                    type="button"
                    onClick={() => markAsRead(notification.id)}
                    className={`w-full text-left px-5 py-4 border-b border-outline-variant last:border-b-0 cursor-pointer transition-colors hover:bg-surface-container ${
                      !notification.is_read ? "bg-primary/10" : "bg-surface"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="pt-1">
                        <span
                          className={`block w-3 h-3 rounded-full ${
                            !notification.is_read ? "bg-primary ring-4 ring-primary/10" : "bg-outline-variant"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-sm ${
                            !notification.is_read ? "font-semibold text-on-surface" : "font-medium text-on-surface-variant"
                          }`}
                        >
                          {notification.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{notification.message}</p>
                        <p className="text-[11px] text-outline mt-2">
                          {new Date(notification.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-5 py-10 text-center">
                  <BellIcon size={28} className="mx-auto text-outline" />
                  <p className="text-sm text-on-surface-variant mt-3">No notifications</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
