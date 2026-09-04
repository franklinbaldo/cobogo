import { describe, it, expect, afterEach } from 'vitest';
import { render, fireEvent, cleanup, screen } from '@testing-library/svelte';
import Radio from './Radio.svelte';
import RadioGroupTest from './RadioGroup.test.svelte';

describe('Radio Component', () => {
  afterEach(cleanup);

  it('renders native value and attributes', () => {
    render(Radio, { props: { value: 'option1', group: null, id: 'rd-1', 'aria-describedby': 'helper-1' } });
    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.value).toBe('option1');
    expect(radio.disabled).toBe(false);
    expect(radio).toHaveAttribute('id', 'rd-1');
    expect(radio).toHaveAttribute('aria-describedby', 'helper-1');
    expect(radio).not.toHaveAttribute('aria-invalid');
  });

  it('forwards disabled', () => {
    render(Radio, { props: { value: 'option1', group: null, disabled: true } });
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('uses aria-invalid for validation with invalid precedence', () => {
    const first = render(Radio, { props: { value: '1', group: '2', valid: true } });
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'false');
    first.unmount();
    render(Radio, { props: { value: '1', group: '2', invalid: true, valid: true } });
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('Radio Group Interaction', () => {
  afterEach(cleanup);

  it('updates group value when another radio is selected', async () => {
    const { getByLabelText } = render(RadioGroupTest, { testGroup: 'apple' });
    const apple = getByLabelText('Apple') as HTMLInputElement;
    const banana = getByLabelText('Banana') as HTMLInputElement;
    expect(apple.checked).toBe(true);
    expect(banana.checked).toBe(false);
    await fireEvent.click(banana);
    expect(banana.checked).toBe(true);
    expect(apple.checked).toBe(false);
  });
});
