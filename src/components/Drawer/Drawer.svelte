<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { fly } from 'svelte/transition';
  import FocusTrap from '../../utils/FocusTrap.svelte';

  type Props = {
    open: boolean;
    position?: 'right' | 'left';
    'aria-label'?: string;
    'aria-describedby'?: string;
    onClose?: () => void;
    children: Snippet;
  };

  let {
    open = $bindable(false),
    position = 'right',
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    onClose,
    children,
  }: Props = $props();

  let dialogElement: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (dialogElement && open && !dialogElement.open) dialogElement.showModal();
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
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === dialogElement) handleClose();
  }

  setContext('dialogClose', () => handleClose);

  const flyX = $derived(position === 'right' ? 100 : -100);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialogElement}
  aria-label={ariaLabel}
  aria-describedby={ariaDescribedby}
  aria-modal="true"
  data-drawer
  data-position={position}
  onkeydown={handleKeydown}
  onclick={handleBackdropClick}
>
  {#if open}
    <FocusTrap active={true}>
      <div
        data-drawer-panel
        in:fly={{ x: flyX, duration: 220, opacity: 1 }}
        out:fly={{ x: flyX, duration: 150, opacity: 1 }}
        onoutroend={() => {
          if (dialogElement && dialogElement.open) dialogElement.close();
        }}
      >
        {@render children()}
      </div>
    </FocusTrap>
  {/if}
</dialog>
