export type Notification = {
    id: string;
    header?: string;
    text: string;
    level: 'info' | 'alert' | 'error';
    link?: string;
}

export type NotificationComponent = {
    props: {
        title?: string;
        text: string;
        link?: string;
        level: 'info' | 'alert' | 'error';
        onClose: () => void;
    }
}