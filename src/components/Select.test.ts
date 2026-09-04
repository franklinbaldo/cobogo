import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Select from './Select.svelte';

describe('Select Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  it('renders native options without an implicit validation state', () => {
    render(Select, { props: { options } });
    const select = screen.getByRole('combobox');
    expect(select).not.toBeDisabled();
    expect(select).not.toHaveAttribute('aria-invalid');
    expect(select).not.toHaveAttribute('data-size');
    expect(select.children).toHaveLength(2);
  });

  it('renders a disabled hidden placeholder option', () => {
    render(Select, { props: { options, placeholder: 'Choose an option' } });
    const select = screen.getByRole('combobox');
    expect(select.children).toHaveLength(3);
    expect(select.children[0]).toHaveTextContent('Choose an option');
    expect(select.children[0]).toHaveAttribute('disabled');
    expect(select.children[0]).toHaveAttribute('hidden');
  });

  it('forwards size through data-size and updates value', async () => {
    render(Select, { props: { options, size: 'lg' } });
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select).toHaveAttribute('data-size', 'lg');
    await fireEvent.change(select, { target: { value: '2' } });
    expect(select.value).toBe('2');
  });

  it('uses aria-invalid for invalid and valid states', () => {
    const first = render(Select, { props: { options, invalid: true } });
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
    first.unmount();

    render(Select, { props: { options, valid: true } });
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'false');
  });

  it('gives invalid precedence over valid', () => {
    render(Select, { props: { options, invalid: true, valid: true } });
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });
});
