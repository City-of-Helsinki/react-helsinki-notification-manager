import React, { useEffect, useState } from "react";

import { NotificationService } from "../lib/NotificationService";
import type { Notification } from "../lib/types";

const App: React.FC = () => {
    const [language, setLanguage] = useState('fi');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const tempNotifications: Notification[] = [ 
        {
            id: '1',
            title: "Virhe",
            content: "Virheviesti",
            level: 'error',
            modified_at: '2021-09-01T12:00:00Z',
            external_url: 'https://example.com',
        },
        {
            id: '2',
            title: "Varoitus",
            content: "Varoitusviesti joka ei ole niin hälyttävän näköinen",
            level: 'alert',
            modified_at: '2021-09-01T12:00:11Z',
            external_url: 'https://example.com',
            external_url_text: 'Lue lisää'
        },
        {
            id: '3',
            title: "Info",
            content: "Infotekstiä jolla kerrotaan jostain muutoksesta joka ei ole virhetilanne",
            level: 'info',
            modified_at: '2021-09-01T12:00:00Z'
        },
    ];

    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = () => {
        const newNotification: Notification = {
            id: notifications.length + 1 + '',
            title: "Info",
            content: "Uusi ilmoitus",
            level: 'info',
            modified_at: '2021-09-01T12:00:00Z'
        };
        setNotifications([...notifications, newNotification]);
    }
    
    useEffect(() => {
        setNotifications(tempNotifications);
    }, [tempNotifications]);

    return (
        <>
            <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="fi">Finnish</option>
                <option value="sv">Swedish</option>
                <option value="en">English</option>
            </select>
            <NotificationService notifications={notifications} language={language} />
            <button onClick={() => addNotification()}>Click me</button>
        </>
    );
};

export default App;