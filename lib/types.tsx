export type Notification = {
    id: string;
    title?: string;
    content: string;
    level: 'info' | 'alert' | 'error';
    modified_at: string;
    external_url?: string;
    external_url_text?: string;
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