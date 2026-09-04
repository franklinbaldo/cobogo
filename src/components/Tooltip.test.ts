import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import TooltipTest from './Tooltip.test.svelte';

const hostFor = (element: HTMLElement) => element.closest('[data-tooltip-host]') as HTMLElement;

describe('Tooltip', () => {
  it('renders closed by default', () => {
    render(TooltipTest);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('opens on hover and closes on mouse leave', async () => {
    render(TooltipTest);
    const button = screen.getByText('Hover me');
    const host = hostFor(button);
    await fireEvent.mouseEnter(host);
    await waitFor(() => expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip Content'));
    await fireEvent.mouseLeave(host);
    await waitFor(() => expect(button).not.toHaveAttribute('aria-describedby'));
  });

  it('opens on focus and closes on focus out', async () => {
    render(TooltipTest);
    const button = screen.getByText('Hover me');
    const host = hostFor(button);
    await fireEvent.focusIn(host);
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
    await fireEvent.focusOut(host);
    await waitFor(() => expect(button).not.toHaveAttribute('aria-describedby'));
  });

  it('connects the trigger to the visible tooltip with aria-describedby', async () => {
    render(TooltipTest);
    const button = screen.getByText('Hover me');
    await fireEvent.mouseEnter(hostFor(button));
    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip');
      expect(button).toHaveAttribute('aria-describedby', tooltip.id);
    });
  });

  it('dismisses with Escape without moving focus', async () => {
    render(TooltipTest);
    const button = screen.getByText('Hover me');
    button.focus();
    await fireEvent.focusIn(hostFor(button));
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
    await fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' });
    await waitFor(() => {
      expect(button).not.toHaveAttribute('aria-describedby');
      expect(document.activeElement).toBe(button);
    });
  });
});
