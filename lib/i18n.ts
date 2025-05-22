import { createInstance, i18n as I18nInstance } from 'i18next';
const i18n: I18nInstance = createInstance({
    fallbackLng: 'fi',
    interpolation: {
        escapeValue: false, // React already does escaping
    },
    resources: {
        'fi': {
            'hns': {  // Make 'hns' a namespace, not a key
                close: 'Sulje',
                notificationAriaLabel: 'Ilmoitus',
                openNewTabAriaLabel: 'Avaa uusi välilehti',
                openExternalDomainAriaLabel: 'Avaa ulkoinen verkkosivusto',
            }
        },
        'sv': {
            'hns': {  // Make 'hns' a namespace, not a key
                close: 'Stäng',
                notificationAriaLabel: 'Meddelande',
                openNewTabAriaLabel: 'Öppna ny flik',
                openExternalDomainAriaLabel: 'Öppna extern webbplats',
            }
        },
        'en': {
            'hns': {  // Make 'hns' a namespace, not a key
                close: 'Close',
                notificationAriaLabel: 'Notification',
                openNewTabAriaLabel: 'Open new tab',
                openExternalDomainAriaLabel: 'Open external website',
            }
        }
    },
});

i18n.init();

export default i18n;