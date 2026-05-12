<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import FocusTrap from '../../utils/FocusTrap.svelte';

  type Props = {
    open: boolean;
    role?: 'dialog' | 'alertdialog';
    'aria-label'?: string;
    'aria-describedby'?: string;
    onClose?: () => void;
    children: Snippet;
  };

  let {
    open = $bindable(false),
    role = 'dialog',
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    onClose,
    children,
  }: Props = $props();

  let dialogElement: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (dialogElement) {
      if (open && !dialogElement.open) dialogElement.showModal();
    }
  });

  function handleClose() {
    open = false;
    onClose?.();
  }
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      event.preventDefault();
      handleClose();
    }
  }
  function handleCancel(event: Event) {
    event.preventDefault();
    handleClose();
  }
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === dialogElement) handleClose();
  }

  setContext('dialogClose', () => handleClose);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialogElement}
  {role}
  aria-label={ariaLabel}
  aria-describedby={ariaDescribedby}
  aria-modal="true"
  onkeydown={handleKeydown}
  oncancel={handleCancel}
  onclick={handleBackdropClick}
>
  {#if open}
    <FocusTrap active={true}>
      <div
        data-dialog-panel
        in:fly={{ y: 20, duration: 220, opacity: 0 }}
        out:fade={{ duration: 150 }}
        onoutroend={() => {
          if (dialogElement && dialogElement.open) dialogElement.close();
        }}
      >
        {@render children()}
      </div>
    </FocusTrap>
  {/if}
</dialog>
