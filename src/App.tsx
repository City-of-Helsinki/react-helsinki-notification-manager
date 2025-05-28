import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { NotificationService } from '../lib/NotificationService';
import type { Notification } from '../lib/types';

// Initialize i18next for the test app
i18next.init({
  lng: 'fi',
  resources: {}
});

const App: React.FC = () => {
  const [language, setLanguage] = useState('fi');
  const [types, setTypes] = useState(['info', 'alert', 'error']);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tempNotifications: Notification[] = [
    {
      id: '1',
      title: 'Virhe',
      content: 'Virheviesti',
      level: 'error',
      modified_at: '2021-09-01T12:00:00Z',
      external_url: 'https://example.com',
    },
    {
      id: '2',
      title: 'Varoitus',
      content: 'Varoitusviesti joka ei ole niin hälyttävän näköinen',
      level: 'alert',
      modified_at: '2021-09-01T12:00:11Z',
      external_url: 'https://example.com',
      external_url_text: 'Lue lisää',
    },
    {
      id: '3',
      title: 'Info',
      content: 'Infotekstiä jolla kerrotaan jostain muutoksesta joka ei ole virhetilanne',
      level: 'info',
      modified_at: '2021-09-01T12:00:00Z',
    },
  ];

  const [notifications, setNotifications] = useState<Notification[]>(tempNotifications);

  const addNotification = () => {
    const newNotification: Notification = {
      id: notifications.length + 1 + '',
      title: 'Info',
      content: 'Uusi ilmoitus',
      level: 'info',
      modified_at: '2021-09-01T12:00:00Z',
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="language-select">Select language: </label>
          <select 
            id="language-select"
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: '5px', marginRight: '10px' }}
          >
            <option value='fi'>Finnish</option>
            <option value='sv'>Swedish</option>
            <option value='en'>English</option>
          </select>
          <select
            id="visible-types-select"
            onChange={(e) => {
              if (e.target.value === 'all') {
                setTypes(['info', 'alert', 'error']);
                return;
              }
              setTypes(Array.from(e.target.selectedOptions, option => option.value))
            }}
            > 
              <option value='all'>All</option>
              <option value='info'>Info</option>
              <option value='alert'>Alert</option>
              <option value='error'>Error</option>
          </select>
          <button 
            onClick={() => addNotification()}
            style={{ 
              padding: '5px 10px', 
              backgroundColor: '#0072C6', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px' 
            }}
          >
            Add notification
          </button>
        </div>
        
        <NotificationService notifications={notifications} language={language} visibleTypes={types}/>
      </div>
    </I18nextProvider>
  );
};

export default App;
