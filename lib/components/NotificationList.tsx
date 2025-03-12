import React from "react";
import { Notification as NotificationType } from "../types";
import { Notification as NotificationComponent, NotificationType as HDSNotificationType } from 'hds-react'
import "./NotificationList.scss";

const NotificationList = (props: {
    notifications: Array<NotificationType>
    closeNotification: (notification: NotificationType) => void
}) => {

    const { notifications, closeNotification } = props;

    return (
        <>
            { notifications.map(notification => {
                return (
                    <div key={notification.id} className="notification-container">
                        <button className="notification-closeBtn" onClick={() => closeNotification(notification)}>X</button>
                        <NotificationComponent type={notification.level as HDSNotificationType} label={notification.title}>
                            <p>{notification.content}</p>
                            {notification.external_url && 
                                <p>
                                    <a href={notification.external_url}>{notification.external_url_text || notification.external_url}</a>
                                </p>
                            }
                        </NotificationComponent>
                    </div>
                );
            })}
        </>
    )
}

export default NotificationList