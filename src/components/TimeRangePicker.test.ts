import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import TimeRangePicker from './TimeRangePicker.svelte';

describe('TimeRangePicker', () => {
  it('renders correctly with two time inputs', () => {
    render(TimeRangePicker, { start: '10:00', end: '12:00' });
    const inputs = document.querySelectorAll('input[type="time"]');
    expect(inputs.length).toBe(2);
    expect((inputs[0] as HTMLInputElement).value).toBe('10:00');
    expect((inputs[1] as HTMLInputElement).value).toBe('12:00');
  });

  it('dynamically sets min and max based on start and end times', () => {
    render(TimeRangePicker, { start: '09:00', end: '17:00', min: '08:00', max: '18:00' });
    const inputs = document.querySelectorAll('input[type="time"]');
    const startInput = inputs[0] as HTMLInputElement;
    const endInput = inputs[1] as HTMLInputElement;
    expect(startInput.min).toBe('08:00');
    expect(startInput.max).toBe('17:00');
    expect(endInput.min).toBe('09:00');
    expect(endInput.max).toBe('18:00');
  });

  it('forwards disabled state', () => {
    render(TimeRangePicker, { disabled: true });
    const inputs = document.querySelectorAll('input[type="time"]');
    expect((inputs[0] as HTMLInputElement).disabled).toBe(true);
    expect((inputs[1] as HTMLInputElement).disabled).toBe(true);
  });

  it('forwards invalid state semantically to both inputs', () => {
    render(TimeRangePicker, { invalid: true });
    const inputs = document.querySelectorAll('input[type="time"]');
    expect(inputs[0]).toHaveAttribute('aria-invalid', 'true');
    expect(inputs[1]).toHaveAttribute('aria-invalid', 'true');
  });
});
