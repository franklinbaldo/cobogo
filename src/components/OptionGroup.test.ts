import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup, screen } from '@testing-library/svelte';
import OptionGroupTest from './OptionGroup.test.svelte';

describe('OptionGroup', () => {
  afterEach(cleanup);

  it('renders a semantic fieldset with legend', () => {
    render(OptionGroupTest, { legend: 'Select an option' });
    const fieldset = screen.getByRole('group', { name: 'Select an option' });
    expect(fieldset.tagName.toLowerCase()).toBe('fieldset');
    expect(fieldset).toHaveAttribute('data-option-group');
    expect(fieldset).toHaveAttribute('data-orientation', 'vertical');
  });

  it('exposes horizontal orientation through data-orientation', () => {
    render(OptionGroupTest, { legend: 'Select an option', orientation: 'horizontal' });
    expect(screen.getByRole('group', { name: 'Select an option' })).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders error feedback and links it through aria-describedby', () => {
    render(OptionGroupTest, { legend: 'Select an option', name: 'my-group', error: 'This field is required' });
    const fieldset = screen.getByRole('group', { name: 'Select an option' });
    expect(fieldset).toHaveAttribute('aria-describedby', 'my-group-error');
    expect(fieldset).toHaveAttribute('data-state', 'invalid');
    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('This field is required');
    expect(error).toHaveAttribute('id', 'my-group-error');
    expect(error).toHaveAttribute('data-feedback', 'error');
  });

  it('passes disabled to the native fieldset', () => {
    render(OptionGroupTest, { legend: 'Select an option', disabled: true });
    expect((screen.getByRole('group', { name: 'Select an option' }) as HTMLFieldSetElement).disabled).toBe(true);
  });
});
