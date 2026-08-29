import { useEffect, useRef, useState } from "react";
import {
    MagnifyingGlassIcon,
    BellIcon,
} from "@phosphor-icons/react";

import {
    getNotifications,
    getUnreadNotificationCount,
    markNotificationAsRead,
    markAllNotificationsAsRead,
} from "../../api/notificationApi";

function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loadingNotifications, setLoadingNotifications] = useState(false);
    const [markingAllRead, setMarkingAllRead] = useState(false);

    const notificationRef = useRef(null);
    const notificationListRef = useRef(null);

    const token = localStorage.getItem("token");

    /*
     * Fetch unread notification count
     */
    const fetchUnreadCount = async () => {
        if (!token) {
            return;
        }

        try {
            const data = await getUnreadNotificationCount(token);

            setUnreadCount(data.unread_count);
        } catch (error) {
            console.error(
                "Failed to fetch unread notification count:",
                error
            );
        }
    };

    /*
     * Fetch all notifications
     */
    const fetchNotifications = async () => {
        if (!token) {
            return;
        }

        setLoadingNotifications(true);

        try {
            const data = await getNotifications(token);

            setNotifications(data);
        } catch (error) {
            console.error(
                "Failed to fetch notifications:",
                error
            );
        } finally {
            setLoadingNotifications(false);
        }
    };

    /*
     * Fetch unread count when Navbar loads
     */
    useEffect(() => {
        fetchUnreadCount();
    }, []);

    /*
     * Fetch notifications when drawer is opened
     */
    useEffect(() => {
        if (showNotifications) {
            fetchNotifications();
        }
    }, [showNotifications]);

    /*
     * Close notification drawer when clicking outside
     */
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setShowNotifications(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    /*
     * Handle mouse-wheel scrolling inside notification list
     */
    useEffect(() => {
        const notificationList = notificationListRef.current;

        if (!notificationList) {
            return;
        }

        const handleWheel = (event) => {
            event.preventDefault();
            event.stopPropagation();

            notificationList.scrollTop += event.deltaY;
        };

        notificationList.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: false,
            }
        );

        return () => {
            notificationList.removeEventListener(
                "wheel",
                handleWheel
            );
        };
    }, [showNotifications, notifications]);

    /*
     * Mark a single notification as read
     */
    const handleNotificationClick = async (notification) => {
        if (notification.is_read) {
            return;
        }

        try {
            /*
             * Update UI immediately
             */
            setNotifications((previousNotifications) =>
                previousNotifications.map((item) =>
                    item.id === notification.id
                        ? {
                              ...item,
                              is_read: true,
                          }
                        : item
                )
            );

            setUnreadCount((previousCount) =>
                Math.max(previousCount - 1, 0)
            );

            /*
             * Update backend
             */
            await markNotificationAsRead(
                notification.id,
                token
            );
        } catch (error) {
            console.error(
                "Failed to mark notification as read:",
                error
            );

            /*
             * Reload data if backend update fails
             */
            fetchNotifications();
            fetchUnreadCount();
        }
    };

    /*
     * Mark all notifications as read
     */
    const handleMarkAllAsRead = async () => {
        if (unreadCount === 0 || markingAllRead) {
            return;
        }

        setMarkingAllRead(true);

        try {
            /*
             * Update UI immediately
             */
            setNotifications((previousNotifications) =>
                previousNotifications.map(
                    (notification) => ({
                        ...notification,
                        is_read: true,
                    })
                )
            );

            setUnreadCount(0);

            /*
             * Update backend
             */
            await markAllNotificationsAsRead(token);
        } catch (error) {
            console.error(
                "Failed to mark all notifications as read:",
                error
            );

            /*
             * Reload data if backend update fails
             */
            fetchNotifications();
            fetchUnreadCount();
        } finally {
            setMarkingAllRead(false);
        }
    };

    return (
        <nav className="h-24 flex items-center justify-between px-8 bg-surface">

            {/* Search */}
            <div
                className="group flex items-center gap-3 bg-surface-container 
                rounded-full px-4 py-3 w-64 focus-within:w-full 
                max-w-md border border-outline-variant
                transition-all duration-500 ease-in-out"
            >
                <MagnifyingGlassIcon
                    size={20}
                    className="shrink-0 text-outline 
                    group-focus-within:text-on-surface 
                    transition-colors duration-300"
                />

                <input
                    type="text"
                    placeholder="Search anything..."
                    className="flex-1 bg-transparent outline-none 
                    text-on-surface-variant 
                    group-focus-within:text-on-surface 
                    placeholder:text-outline text-sm 
                    min-w-0 transition-colors duration-300"
                />
            </div>

            {/* Notifications */}
            <div
                className="relative"
                ref={notificationRef}
            >
                {/* Notification Button */}
                <button
                    type="button"
                    aria-label="Notifications"
                    onClick={() =>
                        setShowNotifications(
                            (previous) => !previous
                        )
                    }
                    className="relative w-11 h-11 rounded-full 
                    flex items-center justify-center
                    text-on-surface 
                    hover:bg-surface-container
                    hover:text-primary 
                    transition-all duration-200"
                >
                    <BellIcon
                        size={24}
                        weight="fill"
                    />

                    {/* Unread Count */}
                    {unreadCount > 0 && (
                        <span
                            className="absolute -top-0.5 -right-0.5 
                            min-w-5 h-5 px-1 rounded-full
                            bg-error text-white text-[10px] 
                            font-semibold
                            flex items-center justify-center
                            border-2 border-surface"
                        >
                            {unreadCount}
                        </span>
                    )}
                </button>

                {/* Notification Drawer */}
                {showNotifications && (
                    <div
                        className="absolute right-0 top-14 w-96 
                        bg-surface rounded-2xl
                        border border-outline-variant
                        shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                        overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between 
                            px-5 py-4
                            bg-surface-container
                            border-b border-outline-variant"
                        >
                            <div>
                                <h3
                                    className="text-base font-semibold 
                                    text-on-surface"
                                >
                                    Notifications
                                </h3>

                                <p
                                    className="text-xs 
                                    text-on-surface-variant mt-1"
                                >
                                    {notifications.length} notifications
                                </p>
                            </div>

                            {/* Mark All as Read */}
                            {unreadCount > 0 && (
                                <button
                                    type="button"
                                    onClick={handleMarkAllAsRead}
                                    disabled={markingAllRead}
                                    className="text-xs font-medium 
                                    text-primary
                                    hover:underline
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed"
                                >
                                    {markingAllRead
                                        ? "Marking..."
                                        : "Mark all as read"}
                                </button>
                            )}
                        </div>

                        {/* Notification List */}
                        <div
                            ref={notificationListRef}
                            className="max-h-105 overflow-y-auto 
                            overscroll-contain"
                        >
                            {/* Loading */}
                            {loadingNotifications ? (
                                <div
                                    className="px-5 py-10 
                                    text-center"
                                >
                                    <p
                                        className="text-sm 
                                        text-on-surface-variant"
                                    >
                                        Loading notifications...
                                    </p>
                                </div>
                            ) : notifications.length > 0 ? (
                                notifications.map(
                                    (notification) => (
                                        <button
                                            key={notification.id}
                                            type="button"
                                            onClick={() =>
                                                handleNotificationClick(
                                                    notification
                                                )
                                            }
                                            className={`w-full text-left 
                                            px-5 py-4
                                            border-b 
                                            border-outline-variant
                                            last:border-b-0
                                            cursor-pointer
                                            transition-colors
                                            hover:bg-surface-container
                                            ${
                                                !notification.is_read
                                                    ? "bg-primary/10"
                                                    : "bg-surface"
                                            }`}
                                        >
                                            <div className="flex gap-3">

                                                {/* Read / Unread Indicator */}
                                                <div className="pt-1">
                                                    <span
                                                        className={`block 
                                                        w-3 h-3 
                                                        rounded-full
                                                        ${
                                                            !notification.is_read
                                                                ? "bg-primary ring-4 ring-primary/10"
                                                                : "bg-outline-variant"
                                                        }`}
                                                    />
                                                </div>

                                                {/* Notification Content */}
                                                <div
                                                    className="flex-1 
                                                    min-w-0"
                                                >
                                                    <h4
                                                        className={`text-sm ${
                                                            !notification.is_read
                                                                ? "font-semibold text-on-surface"
                                                                : "font-medium text-on-surface-variant"
                                                        }`}
                                                    >
                                                        {
                                                            notification.title
                                                        }
                                                    </h4>

                                                    <p
                                                        className="text-xs 
                                                        text-on-surface-variant 
                                                        mt-1 leading-relaxed"
                                                    >
                                                        {
                                                            notification.message
                                                        }
                                                    </p>

                                                    <p
                                                        className="text-[11px] 
                                                        text-outline mt-2"
                                                    >
                                                        {new Date(
                                                            notification.created_at
                                                        ).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                )
                            ) : (
                                /* Empty State */
                                <div
                                    className="px-5 py-10 
                                    text-center"
                                >
                                    <BellIcon
                                        size={28}
                                        className="mx-auto 
                                        text-outline"
                                    />

                                    <p
                                        className="text-sm 
                                        text-on-surface-variant 
                                        mt-3"
                                    >
                                        No notifications
                                    </p>
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