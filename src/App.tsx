import React from "react";
import { NotificationService } from "../lib/NotificationService";
import type { Notification } from "../lib/types";

const notifications: Notification[] = [ 
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

const App: React.FC = () => {
    return (
        <NotificationService notifications={notifications} />
    );
};

export default App;