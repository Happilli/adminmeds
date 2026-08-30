const RECONNECT_DELAY_MS = 5000;

class NotificationSocketManager {
  constructor() {
    this.socket = null;
    this.token = null;
    this.listeners = new Set();
    this.manuallyDisconnected = false;
    this.reconnectTimer = null;
  }

  getWsUrl(token) {
    const base = import.meta.env.VITE_API_URL;
    const wsBase = base.replace(/^http/, "ws");
    return `${wsBase}/ws/notifications?token=${token}`;
  }

  connect(token) {
    if (!token) return;
    this.token = token;
    this.manuallyDisconnected = false;
    this._open(token);
  }

  _open(token) {
    if (this.socket) {
      try {
        this.socket.close();
      } catch {
      }
    }

    const ws = new WebSocket(this.getWsUrl(token));

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.listeners.forEach((cb) => cb(data));
      } catch {
      }
    };

    ws.onclose = () => {
      if (!this.manuallyDisconnected) {
        this._scheduleReconnect();
      }
    };

    ws.onerror = () => {
      ws.close();
    };

    this.socket = ws;
  }

  _scheduleReconnect() {
    if (this.reconnectTimer) return;
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      if (!this.manuallyDisconnected && this.token) {
        this._open(this.token);
      }
    }, RECONNECT_DELAY_MS);
  }

  onNotification(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  disconnect() {
    this.manuallyDisconnected = true;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.socket) {
      this.socket.close(1000, "bye");
      this.socket = null;
    }
    this.token = null;
  }
}

export const notificationSocket = new NotificationSocketManager();
