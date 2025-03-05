import React from "react";
import { Notification as NotificationType } from "../types";
import { Notification as NotificationComponent, NotificationType as HDSNotificationType } from 'hds-react'
import "./NotificationList.scss";

const NotificationList = (props: {
    notifications: Array<NotificationType>
    closeNotification: (id: string) => void
}) => {

    const { notifications, closeNotification } = props;

    return (
        <>
            { notifications.map(notification => {
                return (
                    <div key={notification.id} className="notification-container">
                        <button className="notification-closeBtn" onClick={() => closeNotification(notification.id)}>X</button>
                        <NotificationComponent type={notification.level as HDSNotificationType} label={notification.header}>
                            <p>{notification.text}</p>
                        </NotificationComponent>
                    </div>
                );
            })}
        </>
    )
}

export default NotificationList