import React, { useEffect, useState }  from 'react';
import { Notification } from './types';
import NotificationList from './components/NotificationList';
import i18config from './i18n';
import { I18nextProvider } from 'react-i18next';
import { getClosedNotifications, updateClosedNotifications, getNotificationHash } from './utils.js';

export const NotificationService = (props: {
    notifications: Array<Notification>, 
    language?: string,
  }) => {
  const { notifications, language = 'fi' } = props;
  const [closedNotifications, setClosedNotifications] = useState(getClosedNotifications(notifications));
  const [visibleNotifications, setVisibleNotifications] = useState(() => {
      return notifications.filter(
        (notification: Notification) => !closedNotifications.includes(
          getNotificationHash(notification)
        )
      );
  });

  useEffect(() => {
    if (language) {
      console.debug('ois pitänyt vaihtaa kieltä', language);
      i18config.changeLanguage(language);
    }
  }, [language]);

  useEffect(() => {
    const newClosedNotifications = getClosedNotifications(notifications);
    setClosedNotifications(newClosedNotifications);
    setVisibleNotifications(notifications.filter(
      (notification: Notification) => !newClosedNotifications.includes(
        getNotificationHash(notification)
      )
    ));
  }, [notifications]);


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
    <I18nextProvider i18n={i18config}>
      <NotificationList notifications={visibleNotifications} onClose={closeNotification} />
      {visibleNotifications.length < notifications.length && 
        <button onClick={() => showAllNotifications()}>Näytä kaikki ilmoitukset</button>
      }
    </I18nextProvider>
  );
}
