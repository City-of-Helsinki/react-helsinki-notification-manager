import { Notification } from './types';

export function getClosedNotifications(notifications: Notification[]): string[];

export function clearOutdatedNotifications(notifications: Notification[], closedNotifications: string[]): string[];

export function getNotificationHash(notification: Notification): string;

export function updateClosedNotifications(notificationHashes: string[]): void;
