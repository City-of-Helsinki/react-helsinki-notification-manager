import React from "react";
import { Notification as NotificationType } from "../types";
import { Notification as NotificationComponent, NotificationType as HDSNotificationType, NotificationSize } from 'hds-react'
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
                        <NotificationComponent 
                            type={notification.level as HDSNotificationType}
                            label={notification.title}
                            dismissible={true}
                            closeButtonLabelText="Sulje ilmoitus"
                            onClose={() => closeNotification(notification)}
                            size={NotificationSize.Medium}
                        >
                            {notification.content}
                            {notification.external_url && 
                                <>
                                    <br/>
                                    <a href={notification.external_url}>{notification.external_url_text || notification.external_url}</a>
                                </>
                            }
                        </NotificationComponent>
                    </div>
                );
            })}
        </>
    )
}

export default NotificationList