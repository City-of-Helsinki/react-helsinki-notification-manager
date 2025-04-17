import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi, expect, test, describe } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import NotificationList from '../../components/NotificationList';
import { Notification } from '../../types';

// Mock the HDS-React components
vi.mock('hds-react', () => {
  return {
    Link: ({ 
        children, 
        href, 
        openInNewTabAriaLabel, 
        openInExternalDomainAriaLabel 
      }: { 
        children: React.ReactNode;
        href: string;
        openInNewTabAriaLabel?: string;
        openInExternalDomainAriaLabel?: string;
      }) => (
        <a 
          href={href} 
          data-testid="notification-link"
          aria-label={`${children} ${openInNewTabAriaLabel} ${openInExternalDomainAriaLabel}`}
        >
          {children}
        </a>
      ),
    Notification: ({
        children,
      type, 
      label, 
      onClose, 
      closeButtonLabelText, 
      notificationAriaLabel 
    }: { 
      children: React.ReactNode;
      type: string;
      label: string;
      onClose: () => void;
      closeButtonLabelText: string;
      notificationAriaLabel?: string;
    }) => (
      <div data-testid="hds-notification" data-type={type} data-label={label} aria-label={notificationAriaLabel}>
        <p data-testid="notification-content">
            {children}
        </p>
        <button 
          onClick={onClose} 
          aria-label={closeButtonLabelText}
          data-testid="close-button"
        >
          {closeButtonLabelText}
        </button>
      </div>
    ),
    NotificationSize: {
      Small: 'small',
      Medium: 'medium',
      Large: 'large'
    },
  };
});

// Setup i18n for tests
i18n.changeLanguage('en');

describe('NotificationList Component', () => {
  const mockOnClose = vi.fn();
  
  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('renders empty when no notifications', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList notifications={[]} onClose={mockOnClose} />
      </I18nextProvider>
    );
    
    const notifications = screen.queryAllByTestId('hds-notification');
    expect(notifications).toHaveLength(0);
  });

  test('renders single notification correctly', () => {
    const testNotification: Notification = {
      id: '1',
      title: 'Test Notification',
      content: 'This is a test notification content',
      level: 'info',
      modified_at: '2023-01-01T12:00:00Z'
    };

    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={[testNotification]} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );

    const notification = screen.getByTestId('hds-notification');
    expect(notification).toBeInTheDocument();
    expect(notification).toHaveAttribute('data-type', 'info');
    expect(notification).toHaveAttribute('data-label', 'Test Notification');
    
    const content = screen.getByTestId('notification-content');
    expect(content).toHaveTextContent('This is a test notification content');
  });

  test('renders multiple notifications', () => {
    const testNotifications: Notification[] = [
      {
        id: '1',
        title: 'First Notification',
        content: 'First content',
        level: 'info',
        modified_at: '2023-01-01T12:00:00Z'
      },
      {
        id: '2',
        title: 'Second Notification',
        content: 'Second content',
        level: 'error',
        modified_at: '2023-01-01T12:00:00Z'
      }
    ];

    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={testNotifications} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );

    const notifications = screen.getAllByTestId('hds-notification');
    expect(notifications).toHaveLength(2);
    
    expect(notifications[0]).toHaveAttribute('data-label', 'First Notification');
    expect(notifications[1]).toHaveAttribute('data-label', 'Second Notification');
  });

  test('calls onClose with correct notification when close button clicked', () => {
    const testNotification: Notification = {
      id: '1',
      title: 'Test Notification',
      content: 'This is a test notification content',
      level: 'info',
      modified_at: '2023-01-01T12:00:00Z'
    };

    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={[testNotification]} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledWith(testNotification);
  });

  test('renders external link when external_url is provided', () => {
    const testNotification: Notification = {
      id: '1',
      title: 'Test Notification',
      content: 'This is a test notification content',
      level: 'info',
      modified_at: '2023-01-01T12:00:00Z',
      external_url: 'https://example.com',
      external_url_text: 'Visit Example'
    };

    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={[testNotification]} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );

    const link = screen.getByTestId('notification-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveTextContent('Visit Example');
  });

  test('uses URL as link text when external_url_text is not provided', () => {
    const testNotification: Notification = {
      id: '1',
      title: 'Test Notification',
      content: 'This is a test notification content',
      level: 'info',
      modified_at: '2023-01-01T12:00:00Z',
      external_url: 'https://example.com'
    };

    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={[testNotification]} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );

    const link = screen.getByTestId('notification-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('https://example.com');
  });

  test('applies translations correctly', () => {
    const testNotification: Notification = {
      id: '1',
      title: 'Test Notification',
      content: 'This is a test notification content',
      level: 'info',
      modified_at: '2023-01-01T12:00:00Z'
    };

    i18n.changeLanguage('fi');

    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={[testNotification]} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );

    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toHaveTextContent('Sulje');

    act(() => {
        // Change language to test dynamic language switching
        i18n.changeLanguage('en');
    })
    render(
      <I18nextProvider i18n={i18n}>
        <NotificationList 
          notifications={[testNotification]} 
          onClose={mockOnClose} 
        />
      </I18nextProvider>
    );
    
    const englishCloseButton = screen.getAllByTestId('close-button')[1];
    expect(englishCloseButton).toHaveTextContent('Close');
  });
});