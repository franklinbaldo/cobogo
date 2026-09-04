import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button Component', () => {
  it('renders native defaults through semantic attributes', () => {
    const { container } = render(Button);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('data-intent', 'primary');
    expect(button).not.toHaveAttribute('data-size');
  });

  it('maps intent, size and legacy variant without CSS-class contracts', () => {
    const { container } = render(Button, { props: { intent: 'outline', size: 'small' } });
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('data-intent', 'outline');
    expect(button).toHaveAttribute('data-size', 'small');
  });

  it('triggers onclick when clicked', async () => {
    const onClickMock = vi.fn();
    const { container } = render(Button, { props: { onclick: onClickMock } });
    const button = container.querySelector('button') as HTMLButtonElement;
    await fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('forwards native rest props and events', async () => {
    const onKeyDownMock = vi.fn();
    const { container } = render(Button, { props: { 'aria-label': 'Custom Label', onkeydown: onKeyDownMock } });
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button).toHaveAttribute('aria-label', 'Custom Label');
    button.focus();
    expect(button).toHaveFocus();
    await fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(onKeyDownMock).toHaveBeenCalledTimes(1);
  });
});
