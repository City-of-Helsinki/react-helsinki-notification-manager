import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import NotificationList from './components/NotificationList';
import i18config from './i18n';
import { Notification } from './types';
import { getClosedNotifications, updateClosedNotifications, getNotificationHash } from './utils.ts';

export const NotificationService = (props: {
  notifications: Array<Notification>;
  language?: string;
  visibleTypes?: Array<'info' | 'alert' | 'error'>;
}) => {
  const { notifications, language = 'fi', visibleTypes = ['info', 'alert', 'error'] } = props;
  const [closedNotifications, setClosedNotifications] = useState(getClosedNotifications(notifications));
  const [visibleNotifications, setVisibleNotifications] = useState(() => {
    return notifications.filter(
      (notification: Notification) =>
        !closedNotifications.includes(getNotificationHash(notification)) && visibleTypes.includes(notification.level),
    );
  });

  useEffect(() => {
    if (language) {
      i18config.changeLanguage(language);
    }
  }, [language]);

  useEffect(() => {
    // Get the latest closed notifications from storage
    const newClosedNotifications = getClosedNotifications(notifications);
    setClosedNotifications(newClosedNotifications);

    // Update visible notifications based on current closed status
    setVisibleNotifications(
      notifications.filter(
        (notification: Notification) =>
          !newClosedNotifications.includes(getNotificationHash(notification)) &&
          visibleTypes.includes(notification.level),
      ),
    );
  }, [notifications, visibleTypes]);

  const closeNotification = (notification: Notification) => {
    // Update storage with this specific notification
    updateClosedNotifications(notification);

    // Update local state
    const notificationHash = getNotificationHash(notification);
    const updatedClosedNotifications = [...closedNotifications, notificationHash];
    setClosedNotifications(updatedClosedNotifications);

    // Update visible notifications
    setVisibleNotifications(
      notifications.filter(
        (notification: Notification) =>
          !updatedClosedNotifications.includes(getNotificationHash(notification)) &&
          visibleTypes.includes(notification.level),
      ),
    );
  };

  return (
    <I18nextProvider i18n={i18config}>
      <NotificationList notifications={visibleNotifications} onClose={closeNotification} />
    </I18nextProvider>
  );
};
