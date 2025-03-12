import React, { useState }  from 'react';
import { Notification } from './types';
import NotificationList from './components/NotificationList';
import { getClosedNotifications, updateClosedNotifications, getNotificationHash } from './utils.js';

export const NotificationService = (props: { notifications: Array<Notification> }) => {
  const { notifications } = props;
  const [closedNotifications] = useState(getClosedNotifications(notifications));

  const [visibleNotifications, setVisibleNotifications] = useState(() => {
      return notifications.filter(
        (notification: Notification) => !closedNotifications.includes(
          getNotificationHash(notification)
        ) || notification.level === 'error'
      );
  });

  const closeNotification = (notification: Notification) => {
    const notificationHash = getNotificationHash(notification);
    closedNotifications.push(notificationHash);
    updateClosedNotifications(closedNotifications);
    setVisibleNotifications(notifications.filter((n: Notification) => !closedNotifications.includes(getNotificationHash(n))));
  }
  
  const showAllNotifications = () => {
    localStorage.removeItem('closedNotifications');
    closedNotifications.splice(0, closedNotifications.length);
    setVisibleNotifications(notifications);
  }

  return (
    <>
      <NotificationList notifications={visibleNotifications} closeNotification={closeNotification} />
      {visibleNotifications.length < notifications.length && 
        <button onClick={() => showAllNotifications()}>Näytä kaikki ilmoitukset</button>
      }
    </>
  );
}
