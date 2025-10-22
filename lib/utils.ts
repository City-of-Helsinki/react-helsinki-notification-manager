import { Notification } from './types';

// Constants for storage keys
const PERSISTENT_NOTIFICATIONS_KEY = 'persistentClosedNotifications';
const SESSION_NOTIFICATIONS_KEY = 'sessionClosedNotifications';

/**
 * Get all closed notifications from both persistent storage and session storage
 */
export function getClosedNotifications(notifications: Notification[] = []) {
  const persistentNotifications = getPersistentClosedNotifications(notifications);
  const sessionNotifications = getSessionClosedNotifications();

  return [...persistentNotifications, ...sessionNotifications];
}

/**
 * Get closed info and alert notifications from localStorage
 */
export function getPersistentClosedNotifications(notifications: Notification[] = []) {
  const storage = localStorage.getItem(PERSISTENT_NOTIFICATIONS_KEY);
  let closedNotifications = storage ? JSON.parse(storage) : [];

  // Clean up outdated notifications if we have notifications to compare against
  if (notifications.length > 0) {
    closedNotifications = clearOutdatedNotifications(notifications, closedNotifications);
    updatePersistentClosedNotifications(closedNotifications);
  }

  return closedNotifications;
}

/**
 * Get closed error notifications from sessionStorage
 */
export function getSessionClosedNotifications() {
  const storage = sessionStorage.getItem(SESSION_NOTIFICATIONS_KEY);
  return storage ? JSON.parse(storage) : [];
}

/**
 * Remove notification hashes that no longer exist in the provided notifications
 */
export function clearOutdatedNotifications(notifications: Notification[], closedNotifications: string[]) {
  if (notifications.length === 0) {
    return closedNotifications;
  }

  // Get all non-error notifications
  const persistentNotifications = notifications.filter(
    (notification) => notification.level === 'info' || notification.level === 'alert',
  );

  // Keep only hashes that still exist in the current notifications
  return persistentNotifications
    .filter((notification) => {
      const hash = getNotificationHash(notification);
      return closedNotifications.includes(hash);
    })
    .map((notification) => getNotificationHash(notification));
}

/**
 * Generate a unique hash for a notification
 */
export function getNotificationHash(notification: Notification) {
  return ''.concat(notification.modified_at, '#', notification.id);
}

/**
 * Update closed notifications in appropriate storage based on notification type
 */
export function updateClosedNotifications(notification: Notification) {
  if (notification.level === 'error') {
    updateSessionClosedNotifications([...getSessionClosedNotifications(), getNotificationHash(notification)]);
  } else {
    updatePersistentClosedNotifications([...getPersistentClosedNotifications([]), getNotificationHash(notification)]);
  }
}

/**
 * Update info and alert notifications in localStorage
 */
export function updatePersistentClosedNotifications(notificationHashes: string[]) {
  localStorage.setItem(PERSISTENT_NOTIFICATIONS_KEY, JSON.stringify(notificationHashes));
}

/**
 * Update error notifications in sessionStorage
 */
export function updateSessionClosedNotifications(notificationHashes: string[]) {
  sessionStorage.setItem(SESSION_NOTIFICATIONS_KEY, JSON.stringify(notificationHashes));
}
