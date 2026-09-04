import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import DisclosureTest from './Disclosure.test.svelte';

describe('Disclosure Component (BDD)', () => {
  it('renders closed by default', () => {
    render(DisclosureTest, { title: 'Lina Bo Bardi' });

    const summary = screen.getByText('Lina Bo Bardi');
    expect(summary).toBeInTheDocument();

    const details = summary.closest('details');
    expect(details?.open).toBe(false);
  });

  it('renders open when open prop is true', () => {
    render(DisclosureTest, { title: 'Lina Bo Bardi', open: true });

    const summary = screen.getByText('Lina Bo Bardi');
    const details = summary.closest('details');

    expect(details?.open).toBe(true);
    const content = screen.getByTestId('disclosure-content');
    expect(content).toBeVisible();
  });

  it('forwards name to native details for mutually exclusive groups', () => {
    render(DisclosureTest, { title: 'Athos Bulcão', name: 'brasilia' });

    const details = screen.getByText('Athos Bulcão').closest('details');
    expect(details?.getAttribute('name')).toBe('brasilia');
  });

  it('opens and closes on summary click', async () => {
    render(DisclosureTest, { title: 'Lucio Costa' });

    const summary = screen.getByText('Lucio Costa').closest('summary');
    const details = summary?.closest('details');

    expect(details?.open).toBe(false);

    if (summary) {
      await fireEvent.click(summary);
      expect(details?.open).toBe(true);

      await fireEvent.click(summary);
      expect(details?.open).toBe(false);
    }
  });

  it('does not toggle when disabled', async () => {
    render(DisclosureTest, { title: 'Oscar Niemeyer', disabled: true });

    const summary = screen.getByText('Oscar Niemeyer').closest('summary');
    const details = summary?.closest('details');

    expect(details?.open).toBe(false);

    if (summary) {
      await fireEvent.click(summary);
      expect(details?.open).toBe(false);
    }
  });
});
