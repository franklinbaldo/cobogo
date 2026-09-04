import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import FormFieldWrapper from './FormFieldWrapper.test.svelte';
import FormFieldToggleWrapper from './FormFieldToggleWrapper.test.svelte';

describe('FormField Component', () => {
  it('renders label and forwards id and required context', () => {
    const { container } = render(FormFieldWrapper);
    const label = container.querySelector('label');
    expect(label).toHaveTextContent('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
    expect(screen.getByLabelText('obrigatório')).toBeInTheDocument();

    const input = screen.getByTestId('mock-input');
    expect(input).toHaveAttribute('id', 'test-input');
    expect(input).toBeRequired();
    expect(input).not.toHaveAttribute('aria-describedby');
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('links helper feedback with aria-describedby', () => {
    render(FormFieldWrapper, { props: { helper: 'Helper text' } });
    const helper = screen.getByText('Helper text');
    expect(helper.tagName).toBe('SMALL');
    expect(helper).toHaveAttribute('id', 'test-input-helper');
    expect(helper).toHaveAttribute('data-feedback', 'helper');
    expect(screen.getByTestId('mock-input')).toHaveAttribute('aria-describedby', 'test-input-helper');
  });

  it('uses error feedback as an alert and invalidates the child', () => {
    const { container } = render(FormFieldWrapper, { props: { helper: 'Helper text', error: 'Error text' } });
    expect(container.querySelector('[data-form-field]')).toHaveAttribute('data-state', 'invalid');
    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('Error text');
    expect(error).toHaveAttribute('id', 'test-input-error');
    expect(error).toHaveAttribute('data-feedback', 'error');
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    const input = screen.getByTestId('mock-input');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards error context to Switch semantically', () => {
    render(FormFieldToggleWrapper, { props: { error: 'Switch error' } });
    const switchInput = screen.getByTestId('mock-switch');
    expect(screen.getByRole('alert')).toHaveTextContent('Switch error');
    expect(switchInput).toHaveAttribute('aria-describedby', 'test-switch-error');
    expect(switchInput).toHaveAttribute('aria-invalid', 'true');
  });
});
