import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import DatePicker from './DatePicker.svelte';
import DatePickerContext from './DatePickerContext.test.svelte';

const dateInput = () => document.querySelector('input[type="date"]') as HTMLInputElement;

describe('DatePicker', () => {
  it('renders native date value and bounds', () => {
    render(DatePicker, { value: '2026-05-01', min: '2026-01-01', max: '2026-12-31' });
    const input = dateInput();
    expect(input.value).toBe('2026-05-01');
    expect(input.min).toBe('2026-01-01');
    expect(input.max).toBe('2026-12-31');
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('uses aria-invalid and data-size for state and sizing', () => {
    render(DatePicker, { invalid: true, valid: true, size: 'lg' });
    const input = dateInput();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('data-size', 'lg');
  });

  it('represents an explicit valid state semantically', () => {
    render(DatePicker, { valid: true });
    expect(dateInput()).toHaveAttribute('aria-invalid', 'false');
  });
});

describe('DatePicker with FormField', () => {
  it('inherits semantic state and associations from context', () => {
    render(DatePickerContext, { invalid: true, required: true });
    const input = dateInput();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.required).toBe(true);
    expect(input.id).toBe('date-input');
    expect(input).toHaveAttribute('aria-describedby', 'date-helper');
  });
});
