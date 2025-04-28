import { 
    Notification as NotificationComponent,
    NotificationType as NotificationLevel,
    NotificationSize,
    Link } from 'hds-react'
import React from "react";
import { useTranslation } from "react-i18next";

import { Notification as NotificationType } from "../types";

import "./NotificationList.scss";

const NotificationList = (props: {
    notifications: Array<NotificationType>
    onClose: (notification: NotificationType) => void,
}) => {
    const { t } = useTranslation('hns');
    const { notifications, onClose } = props;
    const closeButtonLabelText = t('close');
    const notificationAriaLabel = t('notificationAriaLabel');
    const openExternalDomainAriaLabel = t('openExternalDomainAriaLabel');
    const openInNewTabAriaLabel = t('openNewTabAriaLabel');

    return (
        <>
            { notifications.map(notification => {
                return (
                    <div key={notification.id} className="notification-container">
                        <NotificationComponent 
                            type={notification.level as NotificationLevel}
                            label={notification.title}
                            dismissible={true}
                            closeButtonLabelText={closeButtonLabelText}
                            onClose={() => onClose(notification)}
                            size={NotificationSize.Medium}
                            notificationAriaLabel={notificationAriaLabel}
                        >
                            {notification.content}
                            {notification.external_url && 
                                <>
                                    <br/>
                                    <Link 
                                        href={notification.external_url}
                                        external
                                        openInNewTab
                                        openInNewTabAriaLabel={openInNewTabAriaLabel}
                                        openInExternalDomainAriaLabel={openExternalDomainAriaLabel}
                                    >
                                        {notification.external_url_text || notification.external_url}
                                    </Link>
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