import { Notification } from './types';

export function getClosedNotifications(notifications: Notification[] = []) {
  const closedNotificationStorage = localStorage.getItem('closedNotifications');
  let closedNotifications = closedNotificationStorage ? JSON.parse(closedNotificationStorage) : [];
  closedNotifications = clearOutdatedNotifications(notifications, closedNotifications);
  updateClosedNotifications(closedNotifications);
  return closedNotifications;
}

export function clearOutdatedNotifications(notifications: Notification[], closedNotifications: string[]) {
  return notifications
    .filter((notification) => notification.level !== 'error')
    .filter((notification) => {
      const hash = getNotificationHash(notification);
      return closedNotifications.includes(hash);
    })
    .map((notification) => getNotificationHash(notification));
}

export function getNotificationHash(notification: Notification) {
  return ''.concat(notification.modified_at, '#', notification.id);
}

export function updateClosedNotifications(notificationHashes: string[]) {
  localStorage.setItem('closedNotifications', JSON.stringify(notificationHashes));
}
