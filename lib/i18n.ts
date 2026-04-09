import { createInstance } from 'i18next';

const i18n = createInstance();

i18n.init({
  fallbackLng: 'fi',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  resources: {
    fi: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: 'Sulje',
        notificationAriaLabel: 'Ilmoitus',
        openExternalDomainAriaLabel: 'Avaa ulkoinen verkkosivusto',
      },
    },
    sv: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: 'Stäng',
        notificationAriaLabel: 'Meddelande',
        openExternalDomainAriaLabel: 'Öppna extern webbplats',
      },
    },
    en: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: 'Close',
        notificationAriaLabel: 'Notification',
        openExternalDomainAriaLabel: 'Open external website',
      },
    },
  },
});

export default i18n;
