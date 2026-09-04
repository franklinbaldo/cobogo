import { describe, it, expect, afterEach } from 'vitest';
import { render, fireEvent, cleanup, screen } from '@testing-library/svelte';
import Checkbox from './Checkbox.svelte';
import CheckboxGroupTest from './CheckboxGroup.test.svelte';

describe('Checkbox Component', () => {
  afterEach(cleanup);

  it('renders native defaults and toggles', async () => {
    render(Checkbox);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    expect(checkbox.disabled).toBe(false);
    expect(checkbox).not.toHaveAttribute('aria-invalid');
    await fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('forwards native disabled, id and described-by attributes', () => {
    render(Checkbox, { props: { disabled: true, id: 'cb-1', 'aria-describedby': 'helper-1' } });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute('id', 'cb-1');
    expect(checkbox).toHaveAttribute('aria-describedby', 'helper-1');
  });

  it('uses aria-invalid for invalid and valid states with invalid precedence', () => {
    const first = render(Checkbox, { props: { valid: true } });
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'false');
    first.unmount();
    render(Checkbox, { props: { invalid: true, valid: true } });
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('Checkbox Group Interaction', () => {
  afterEach(cleanup);

  it('updates group membership when checked and unchecked', async () => {
    const { getByLabelText } = render(CheckboxGroupTest, { testGroup: ['apple'] });
    const apple = getByLabelText('Apple') as HTMLInputElement;
    const banana = getByLabelText('Banana') as HTMLInputElement;
    expect(apple.checked).toBe(true);
    expect(banana.checked).toBe(false);
    await fireEvent.click(banana);
    expect(banana.checked).toBe(true);
    await fireEvent.click(apple);
    expect(apple.checked).toBe(false);
  });
});
