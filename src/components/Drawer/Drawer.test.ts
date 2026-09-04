import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import DrawerTestWrapper from './Drawer.test.svelte';
import Drawer from './Drawer.svelte';
import { createRawSnippet } from 'svelte';

describe('Drawer Organism', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn(function () { this.open = true; });
    HTMLDialogElement.prototype.close = vi.fn(function () {
      this.open = false;
      this.dispatchEvent(new Event('close'));
    });
  });

  it('does not render content when closed', () => {
    render(DrawerTestWrapper, { open: false });
    const dialog = screen.queryByRole('dialog', { hidden: true });
    expect(dialog).not.toHaveAttribute('open');
    expect(screen.queryByText('Drawer Title')).not.toBeInTheDocument();
  });

  it('renders content and dialog attributes when open', async () => {
    render(DrawerTestWrapper, { open: true });
    await waitFor(() => {
      const dialog = screen.getByRole('dialog', { hidden: true });
      expect(dialog).toHaveAttribute('open');
      expect(dialog).toHaveAttribute('aria-label', 'Test Drawer');
      expect(dialog).toHaveAttribute('aria-describedby', 'drawer-desc');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(screen.getByText('Drawer Title')).toBeInTheDocument();
    });
  });

  it('exposes position through data-position', async () => {
    const { rerender } = render(DrawerTestWrapper, { open: true, position: 'right' });
    let dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toHaveAttribute('data-position', 'right');
    await rerender({ open: true, position: 'left' });
    dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toHaveAttribute('data-position', 'left');
  });

  it('closes from the context close button', async () => {
    const { component } = render(DrawerTestWrapper, { open: true });
    await waitFor(() => expect(screen.getByRole('dialog', { hidden: true })).toHaveAttribute('open'));
    const dialog = screen.getByRole('dialog', { hidden: true });
    await fireEvent.click(screen.getByLabelText('Close drawer'));
    component.open = false;
    dialog.close();
    await waitFor(() => expect(dialog).not.toHaveAttribute('open'));
  });

  it('calls onClose when backdrop is clicked', async () => {
    const onClose = vi.fn();
    const children = createRawSnippet(() => ({ render: () => '<div id="dummy"></div>' }));
    render(Drawer, { open: true, onClose, children });
    await waitFor(() => expect(screen.getByRole('dialog', { hidden: true })).toHaveAttribute('open'));
    await fireEvent.click(screen.getByRole('dialog', { hidden: true }));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it('closes when Escape is pressed', async () => {
    const { component } = render(DrawerTestWrapper, { open: true });
    await waitFor(() => expect(screen.getByRole('dialog', { hidden: true })).toHaveAttribute('open'));
    const dialog = screen.getByRole('dialog', { hidden: true });
    await fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });
    component.open = false;
    dialog.close();
    await waitFor(() => expect(dialog).not.toHaveAttribute('open'));
  });
});
