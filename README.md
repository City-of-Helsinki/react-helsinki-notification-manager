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

## Usage

```jsx
import { NotificationService } from 'react-helsinki-notification-service';

// Sample notification data
const notifications = [
  {
    id: '1',
    title: 'Information',
    content: 'This is an informational message.',
    level: 'info',
    modified_at: '2023-04-14T10:00:00Z'
  }
];

function App() {
  return (
    <NotificationService 
      notifications={notifications} 
      language="fi" 
    />
  );
}
```

## API Reference

### NotificationService Props
```markdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notifications` | `Array<Notification>` | `[]` | Array of notification objects to display |
| `language` | `string` | `'fi'` | Language code (supports 'fi', 'sv', 'en') |
´´´

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