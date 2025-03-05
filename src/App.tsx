import React from "react";
import { NotificationService } from "../lib/NotificationService";
import type { Notification } from "../lib/types";

const notifications: Notification[] = [ 
    {
        id: '1',
        header: "Virhe",
        text: "Virheviesti",
        level: 'error'
    },
    {
        id: '2',
        header: "Varoitus",
        text: "Varoitusviesti joka ei ole niin hälyttävän näköinen",
        level: 'alert'
    },
    {
        id: '3',
        header: "Info",
        text: "Infotekstiä jolla kerrotaan jostain muutoksesta joka ei ole virhetilanne",
        level: 'info'
    },
];

const App: React.FC = () => {
    return (
        <NotificationService notifications={notifications} />
    );
};

export default App;