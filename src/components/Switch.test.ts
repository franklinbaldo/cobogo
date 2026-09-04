import { describe, it, expect, afterEach } from 'vitest';
import { render, fireEvent, cleanup, screen } from '@testing-library/svelte';
import Switch from './Switch.svelte';

describe('Switch Component', () => {
  afterEach(cleanup);

  it('renders native defaults and toggles', async () => {
    render(Switch);
    const toggle = screen.getByRole('switch') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
    expect(toggle.disabled).toBe(false);
    expect(toggle).not.toHaveAttribute('aria-invalid');
    await fireEvent.click(toggle);
    expect(toggle.checked).toBe(true);
  });

  it('forwards native disabled, id and described-by attributes', () => {
    render(Switch, { props: { disabled: true, id: 'sw-1', 'aria-describedby': 'helper-1' } });
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDisabled();
    expect(toggle).toHaveAttribute('id', 'sw-1');
    expect(toggle).toHaveAttribute('aria-describedby', 'helper-1');
  });

  it('uses aria-invalid for validation with invalid precedence', () => {
    const first = render(Switch, { props: { valid: true } });
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'false');
    first.unmount();
    render(Switch, { props: { invalid: true, valid: true } });
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });
});
