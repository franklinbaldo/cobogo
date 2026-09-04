import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Notification from './Notification.svelte';

describe('Notification', () => {
  it('renders title, message and semantic info intent', () => {
    render(Notification, { props: { title: 'Task Completed', message: 'Your report has been successfully generated.', intent: 'info' } });
    const notification = screen.getByRole('status');
    expect(screen.getByText('Task Completed')).toBeInTheDocument();
    expect(screen.getByText('Your report has been successfully generated.')).toBeInTheDocument();
    expect(notification).toHaveAttribute('data-toast');
    expect(notification).toHaveAttribute('data-intent', 'info');
    expect(notification).toHaveAttribute('aria-live', 'polite');
  });

  it('maps danger to alert/assertive and tip to status/success', () => {
    const first = render(Notification, { props: { title: 'Danger', intent: 'danger' } });
    let el = screen.getByRole('alert');
    expect(el).toHaveAttribute('data-intent', 'danger');
    expect(el).toHaveAttribute('aria-live', 'assertive');
    first.unmount();

    render(Notification, { props: { title: 'Tip', intent: 'tip' } });
    el = screen.getByRole('status');
    expect(el).toHaveAttribute('data-intent', 'success');
  });

  it('can be dismissed when dismissible is true', async () => {
    const ondismiss = vi.fn();
    render(Notification, { props: { title: 'Dismiss me', dismissible: true, ondismiss } });
    await fireEvent.click(screen.getByRole('button', { name: /dismiss/i }));
    expect(ondismiss).toHaveBeenCalledTimes(1);
  });

  it('hides the close button when dismissible is false', () => {
    render(Notification, { props: { title: 'Cannot dismiss', dismissible: false } });
    expect(screen.queryByRole('button', { name: /dismiss/i })).toBeNull();
  });

  it('does not auto-dismiss when timeout is zero', () => {
    vi.useFakeTimers();
    const ondismiss = vi.fn();
    render(Notification, { props: { title: 'No timeout', timeout: 0, ondismiss } });
    vi.advanceTimersByTime(5000);
    expect(ondismiss).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('auto-dismisses after the specified timeout', () => {
    vi.useFakeTimers();
    const ondismiss = vi.fn();
    render(Notification, { props: { title: 'Auto dismiss', timeout: 2000, ondismiss } });
    vi.advanceTimersByTime(1999);
    expect(ondismiss).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(ondismiss).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('pauses timeout on hover and resumes on leave', async () => {
    vi.useFakeTimers();
    const ondismiss = vi.fn();
    render(Notification, { props: { title: 'Hover pause', timeout: 2000, ondismiss } });
    const notification = screen.getByRole('status');
    vi.advanceTimersByTime(1000);
    await fireEvent.mouseEnter(notification);
    vi.advanceTimersByTime(2000);
    expect(ondismiss).not.toHaveBeenCalled();
    await fireEvent.mouseLeave(notification);
    vi.advanceTimersByTime(1000);
    expect(ondismiss).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('uses tabindex 0 for timed notifications and -1 otherwise', () => {
    const first = render(Notification, { props: { title: 'Auto dismiss', timeout: 2000 } });
    expect(screen.getByRole('status')).toHaveAttribute('tabindex', '0');
    first.unmount();
    render(Notification, { props: { title: 'Static dismiss', timeout: 0 } });
    expect(screen.getByRole('status')).toHaveAttribute('tabindex', '-1');
  });

  it('pauses timeout on focus and resumes on blur', async () => {
    vi.useFakeTimers();
    const ondismiss = vi.fn();
    render(Notification, { props: { title: 'Focus pause', timeout: 2000, ondismiss } });
    const notification = screen.getByRole('status');
    vi.advanceTimersByTime(1000);
    await fireEvent.focusIn(notification);
    vi.advanceTimersByTime(2000);
    expect(ondismiss).not.toHaveBeenCalled();
    await fireEvent.focusOut(notification);
    vi.advanceTimersByTime(1000);
    expect(ondismiss).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });
});
