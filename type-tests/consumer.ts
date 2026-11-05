// Type-checks the built package the way a consuming app imports it.
// The package name resolves to dist/ through package.json "exports", so
// this fails if the published type declarations are missing or empty.
import {
  NotificationService,
  type Notification,
  type NotificationComponent,
} from '@city-of-helsinki/react-helsinki-notification-manager';

const notification: Notification = {
  id: '1',
  content: 'Content',
  level: 'info',
  modified_at: '2026-01-01T00:00:00Z',
};

const invalidNotification: Notification = {
  id: '2',
  content: 'Content',
  // @ts-expect-error Fails if the types degrade to `any`.
  level: 'not-a-level',
  modified_at: '2026-01-01T00:00:00Z',
};

type ComponentProps = NotificationComponent['props'];

export const usage = {
  NotificationService,
  notification,
  invalidNotification,
  props: { text: 'Text', level: 'alert', onClose: () => {} } satisfies ComponentProps,
};
