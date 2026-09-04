import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import BadgeTest from './BadgeTest.svelte';

describe('Badge.svelte', () => {
  afterEach(cleanup);

  it('renders the default semantic intent', () => {
    render(BadgeTest, { text: 'Default Badge' });
    const badge = screen.getByText('Default Badge').closest('[data-badge]');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-intent', 'default');
  });

  it('maps variants to data-intent', () => {
    render(BadgeTest, { text: 'Verde Badge', variant: 'verde' });
    const badge = screen.getByText('Verde Badge').closest('[data-badge]');
    expect(badge).toHaveAttribute('data-intent', 'verde');
  });

  it('forwards custom attributes such as class', () => {
    render(BadgeTest, { text: 'Custom Badge', class: 'custom-class' });
    const badge = screen.getByText('Custom Badge').closest('[data-badge]');
    expect(badge).toHaveClass('custom-class');
  });
});
