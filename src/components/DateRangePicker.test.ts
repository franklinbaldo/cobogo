import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import DateRangePicker from './DateRangePicker.svelte';

describe('DateRangePicker', () => {
  it('renders correctly with two date inputs', () => {
    render(DateRangePicker, { start: '2026-05-01', end: '2026-05-10' });
    const inputs = document.querySelectorAll('input[type="date"]');
    expect(inputs.length).toBe(2);
    expect((inputs[0] as HTMLInputElement).value).toBe('2026-05-01');
    expect((inputs[1] as HTMLInputElement).value).toBe('2026-05-10');
  });

  it('dynamically sets min and max based on start and end dates', () => {
    render(DateRangePicker, { start: '2026-05-05', end: '2026-05-15', min: '2026-05-01', max: '2026-05-20' });
    const inputs = document.querySelectorAll('input[type="date"]');
    const startInput = inputs[0] as HTMLInputElement;
    const endInput = inputs[1] as HTMLInputElement;
    expect(startInput.min).toBe('2026-05-01');
    expect(startInput.max).toBe('2026-05-15');
    expect(endInput.min).toBe('2026-05-05');
    expect(endInput.max).toBe('2026-05-20');
  });

  it('forwards disabled state', () => {
    render(DateRangePicker, { disabled: true });
    const inputs = document.querySelectorAll('input[type="date"]');
    expect((inputs[0] as HTMLInputElement).disabled).toBe(true);
    expect((inputs[1] as HTMLInputElement).disabled).toBe(true);
  });

  it('forwards invalid state semantically to both inputs', () => {
    render(DateRangePicker, { invalid: true });
    const inputs = document.querySelectorAll('input[type="date"]');
    expect(inputs[0]).toHaveAttribute('aria-invalid', 'true');
    expect(inputs[1]).toHaveAttribute('aria-invalid', 'true');
  });
});
