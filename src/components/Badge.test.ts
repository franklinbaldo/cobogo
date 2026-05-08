import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import BadgeTest from './BadgeTest.svelte';

describe('Badge.svelte', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders correctly with default variant', () => {
    render(BadgeTest, { text: 'Default Badge' });
    const badge = screen.getByText('Default Badge').closest('mark');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-intent', 'default');
  });

  it('renders correctly with different variants', () => {
    render(BadgeTest, { text: 'Verde Badge', variant: 'verde' });
    const badge = screen.getByText('Verde Badge').closest('mark');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-intent', 'verde');
  });

  it('renders custom class names', () => {
    render(BadgeTest, { text: 'Custom Badge', class: 'custom-class' });
    const badge = screen.getByText('Custom Badge').closest('mark');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('custom-class');
  });
});
