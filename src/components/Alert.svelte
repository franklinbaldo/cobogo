<script lang="ts">
  import type { Snippet } from 'svelte';

  /**
   * Alert: live region for feedback messages.
   * Variant is forwarded as data-intent. Dismiss button is a native <button>.
   */
  type Props = {
    intent?: 'info' | 'success' | 'warning' | 'danger';
    /** @deprecated use `intent` */
    variant?: 'info' | 'success' | 'warning' | 'danger';
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    children?: Snippet;
  };

  let {
    intent,
    variant,
    title,
    dismissible = false,
    onDismiss,
    children,
  }: Props = $props();

  let dataIntent = $derived(intent ?? variant ?? 'info');
  let dismissed = $state(false);

  function handleDismiss() {
    dismissed = true;
    onDismiss?.();
  }
</script>

{#if !dismissed}
  <div role="alert" aria-live="polite" data-alert data-intent={dataIntent}>
    <span aria-hidden="true">
      {#if dataIntent === 'success'}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      {:else if dataIntent === 'warning'}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
      {:else if dataIntent === 'danger'}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
      {:else}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
      {/if}
    </span>

    <div>
      {#if title}<strong>{title}</strong>{/if}
      {#if children}{@render children()}{/if}
    </div>

    {#if dismissible}
      <button type="button" data-intent="link" aria-label="Fechar alerta" onclick={handleDismiss}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    {/if}
  </div>
{/if}
