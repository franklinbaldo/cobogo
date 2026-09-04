import { tick } from 'svelte';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Combobox from './Combobox.svelte';
import ComboboxContextTest from './ComboboxContext.test.svelte';

const defaultOptions = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
];

describe('Combobox Component', () => {
  it('renders closed with a placeholder and opens on focus', async () => {
    render(Combobox, { props: { options: defaultOptions, placeholder: 'Select state' } });
    const input = screen.getByPlaceholderText('Select state');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await fireEvent.focus(input);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('filters options and exposes a semantic empty option', async () => {
    render(Combobox, { props: { options: defaultOptions, placeholder: 'Search...' } });
    const input = screen.getByPlaceholderText('Search...');
    await fireEvent.focus(input);
    await fireEvent.input(input, { target: { value: 'Rio' } });
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByRole('option')).toHaveTextContent('Rio de Janeiro');
    await fireEvent.input(input, { target: { value: 'Bahia' } });
    expect(screen.getByRole('option')).toHaveTextContent('No options found');
  });

  it('selects an option via mousedown', async () => {
    render(Combobox, { props: { options: defaultOptions, placeholder: 'Search...', value: '' } });
    const input = screen.getByPlaceholderText('Search...');
    await fireEvent.focus(input);
    await fireEvent.mouseDown(screen.getByText('São Paulo'));
    await fireEvent.mouseDown(document.body);
    await tick();
    expect(input).toHaveValue('São Paulo');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation through data-focused and aria-activedescendant', async () => {
    render(Combobox, { props: { options: defaultOptions, placeholder: 'Search...' } });
    const input = screen.getByPlaceholderText('Search...');
    await fireEvent.focus(input);
    await fireEvent.keyDown(input, { key: 'ArrowDown' });
    let options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute('data-focused');
    expect(input).toHaveAttribute('aria-activedescendant', options[0].id);
    await fireEvent.keyDown(input, { key: 'ArrowDown' });
    options = screen.getAllByRole('option');
    expect(options[1]).toHaveAttribute('data-focused');
    await fireEvent.keyDown(input, { key: 'Enter' });
    expect(input).toHaveValue('Rio de Janeiro');
  });

  it('inherits form field context properties', () => {
    render(ComboboxContextTest);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'ctx-id');
    expect(input).toHaveAttribute('aria-describedby', 'ctx-desc');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toBeRequired();
  });

  it('uses aria-invalid for valid and invalid states with invalid precedence', () => {
    const options = [{ value: '1', label: 'Option 1' }];
    const first = render(Combobox, { props: { options, valid: true } });
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false');
    first.unmount();
    render(Combobox, { props: { options, invalid: true, valid: true } });
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
});
