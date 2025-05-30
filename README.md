# React Helsinki Notification Service

## Introduction

React Helsinki Notification Service is a standalone component to display HDS Notifications and manage their state. The component works best when paired with the django-helsinki-notification library on a django backend but can be used with any method of creating new notifications.

## Development

When developing the library keep in mind the end goal which is to have this library eventually become part of HDS ecosystem. Current plan is to have this standalone component working and up to date until HDS4 adaptation has increased to sufficient level that this can easily be adopted from HDS instead.

Currently only supports 3 languages, Finnish, Swedish and English, this only due to having these translations reside inside the component. One potential development direction is to have these translations be extendable by the software that uses this component.

## Installation

```bash
npm install react-helsinki-notification-service
# or
yarn add react-helsinki-notification-service
```

## Installation & Usage

This library uses peer dependencies for React, HDS, and i18next. Please see [DEPENDENCY_MANAGEMENT.md](./DEPENDENCY_MANAGEMENT.md) for detailed installation instructions and troubleshooting common dependency issues.

```bash
# Install the library
npm install react-helsinki-notification-manager

# Install peer dependencies (if you don't already have them)
npm install react@^18.0.0 react-dom@^18.0.0 hds-react@^4.2.0 i18next@^24.2.3 react-i18next@^15.4.1
```

### Basic Usage

```jsx
import { NotificationService } from 'react-helsinki-notification-manager';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next (required for the component)
i18next.init({
  lng: 'fi',
  resources: {} // Add your translations here
});

// Sample notification data
const notifications = [
  {
    id: '1',
    title: 'Information',
    content: 'This is an informational message.',
    level: 'info',
    modified_at: '2023-04-14T10:00:00Z',
  },
];

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <NotificationService notifications={notifications} language='fi' />
    </I18nextProvider>
  );
}
```

## API Reference

### NotificationService Props

| Prop            | Type                  | Default                         | Description                               |
| --------------- | --------------------- | ------------------------------- | ----------------------------------------- |
| `notifications` | `Array<Notification>` | `[]`                            | Array of notification objects to display  |
| `language`      | `string`              | `'fi'`                          | Language code (supports 'fi', 'sv', 'en') |
| `visibletypes`  | `Array<string>`       | `['info', 'warning', 'error']`  | Array of Notification type strings        |

### Notification Object Format

```typescript
interface Notification {
  id: string;
  title: string;
  content: string;
  level: 'info' | 'success' | 'alert' | 'error';
  modified_at: string;
  external_url?: string;
  external_url_text?: string;
}
```

## Contributing

As this component is intended to eventually become part of the Helsinki Design System, please follow these guidelines:

1. Ensure your code follows the [HDS contribution guidelines](https://github.com/City-of-Helsinki/helsinki-design-system/)
2. Write tests for new features
3. Keep accessibility in mind
4. Submit PRs with detailed descriptions of changes
