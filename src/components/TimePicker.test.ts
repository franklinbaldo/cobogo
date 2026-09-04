import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import TimePicker from './TimePicker.svelte';
import TimePickerContext from './TimePickerContext.test.svelte';

const timeInput = () => document.querySelector('input[type="time"]') as HTMLInputElement;

describe('TimePicker', () => {
  it('renders native time value without an implicit validation state', () => {
    render(TimePicker, { value: '14:30' });
    const input = timeInput();
    expect(input.value).toBe('14:30');
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('uses aria-invalid and data-size for state and sizing', () => {
    render(TimePicker, { invalid: true, valid: true, size: 'sm' });
    const input = timeInput();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('data-size', 'sm');
  });

  it('represents an explicit valid state semantically', () => {
    render(TimePicker, { valid: true });
    expect(timeInput()).toHaveAttribute('aria-invalid', 'false');
  });
});

describe('TimePicker with FormField', () => {
  it('inherits semantic state and associations from context', () => {
    render(TimePickerContext, { invalid: true, required: true });
    const input = timeInput();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.required).toBe(true);
    expect(input.id).toBe('time-input');
    expect(input).toHaveAttribute('aria-describedby', 'time-helper');
  });
});
