import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Alert from './Alert.svelte';

describe('Alert Component', () => {
  it('renders the title and content correctly', () => {
    render(Alert, { props: { title: 'Test Title' } });
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders correctly with default variant', () => {
    render(Alert);
    expect(screen.getByRole('alert')).toHaveAttribute('data-intent', 'info');
  });

  it('renders correctly with warning variant', () => {
    render(Alert, { props: { variant: 'warning' } });
    expect(screen.getByRole('alert')).toHaveAttribute('data-intent', 'warning');
  });

  it('calls onDismiss when dismiss button is clicked', async () => {
    const onDismissMock = vi.fn();
    render(Alert, { props: { dismissible: true, onDismiss: onDismissMock } });

    const dismissBtn = screen.getByRole('button', { name: /fechar alerta/i });
    await fireEvent.click(dismissBtn);

    expect(onDismissMock).toHaveBeenCalled();
  });

  it('has proper aria attributes', () => {
    render(Alert);
    const alertEl = screen.getByRole('alert');
    expect(alertEl).toHaveAttribute('aria-live', 'polite');
  });
});
