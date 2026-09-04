import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import TextInput from './TextInput.svelte';

describe('TextInput Component', () => {
  it('renders native defaults without inventing a validation state', () => {
    render(TextInput);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).not.toHaveAttribute('disabled');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).not.toHaveAttribute('data-size');
  });

  it('forwards type, placeholder, size and disabled semantically', () => {
    render(TextInput, { props: { type: 'email', placeholder: 'Enter email', size: 'lg', disabled: true } });
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('data-size', 'lg');
  });

  it('updates value on user input', async () => {
    render(TextInput);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await fireEvent.input(input, { target: { value: 'New text' } });
    expect(input.value).toBe('New text');
  });

  it('uses aria-invalid for invalid and valid states', () => {
    const first = render(TextInput, { props: { invalid: true } });
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    first.unmount();

    render(TextInput, { props: { valid: true } });
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false');
  });

  it('gives invalid precedence over valid', () => {
    render(TextInput, { props: { invalid: true, valid: true } });
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
});
