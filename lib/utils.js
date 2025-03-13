
export function getClosedNotifications(notifications = []) {
    const closedNotificationStorage = localStorage.getItem('closedNotifications');
    let closedNotifications = closedNotificationStorage ? JSON.parse(closedNotificationStorage) : [];
    closedNotifications = clearOutdatedNotifications(notifications, closedNotifications);
    updateClosedNotifications(closedNotifications);
    return closedNotifications;
}

export function clearOutdatedNotifications(notifications, closedNotifications) {
    return notifications.filter(
        (notification) => notification.level !== 'error'
    ).filter((notification) => {
        const hash = getNotificationHash(notification);
        return closedNotifications.includes(hash);
    }).map((notification) => getNotificationHash(notification));
}

export function getNotificationHash(notification) {
    return "".concat(notification.modified_at, '#', notification.id);
}

export function updateClosedNotifications(notificationHashes) {
    localStorage.setItem('closedNotifications', JSON.stringify(notificationHashes));
}
