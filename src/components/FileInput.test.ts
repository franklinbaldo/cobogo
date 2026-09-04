import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import FileInput from './FileInput.svelte';
import FileInputContextTest from './FileInputContext.test.svelte';

const fileInput = () => document.querySelector('input[type="file"]') as HTMLInputElement;

describe('FileInput Component', () => {
  it('renders a native file input and forwards file attributes', () => {
    render(FileInput, { props: { id: 'test-file', accept: 'image/*', multiple: true, disabled: true } });
    const input = fileInput();
    expect(input.id).toBe('test-file');
    expect(input.accept).toBe('image/*');
    expect(input.multiple).toBe(true);
    expect(input.disabled).toBe(true);
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('uses aria-invalid and data-size instead of CSS state classes', () => {
    render(FileInput, { props: { invalid: true, valid: true, size: 'lg' } });
    const input = fileInput();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('data-size', 'lg');
  });

  it('represents an explicit valid state with aria-invalid=false', () => {
    render(FileInput, { props: { valid: true } });
    expect(fileInput()).toHaveAttribute('aria-invalid', 'false');
  });

  it('inherits semantic properties from cobogo-form-field context', () => {
    render(FileInputContextTest);
    const input = fileInput();
    expect(input.id).toBe('ctx-id');
    expect(input).toHaveAttribute('aria-describedby', 'ctx-desc');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.required).toBe(true);
  });
});
