import React, { useState }  from 'react';
import { Notification } from './types';
import NotificationList from './components/NotificationList';
 
const closedNotificationStorage = localStorage.getItem('closedNotifications');
const closedNotifications = closedNotificationStorage ? JSON.parse(closedNotificationStorage) : [];

export const NotificationService = (props: { notifications: Array<Notification> }) => {
  const { notifications } = props;

  const [visibleNotifications, setVisibleNotifications] = useState(() => {
      return notifications.filter((notification: Notification) => !closedNotifications.includes(notification.id) || notification.level === 'error');
  });

  const closeNotification = (id: string) => {
    closedNotifications.push(id);
    localStorage.setItem('closedNotifications', JSON.stringify(closedNotifications));
    setVisibleNotifications(notifications.filter((notification: Notification) => !closedNotifications.includes(notification.id)));
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
