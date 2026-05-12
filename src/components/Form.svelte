<script lang="ts">
  import { type Snippet } from 'svelte';

  /**
   * Native <form> with optional <fieldset>/<legend> grouping. Pico styles
   * <form>, <fieldset>, <legend> natively. Form-level error renders
   * <aside role="alert" data-intent="danger">.
   */
  type Props = {
    action?: string;
    method?: 'get' | 'post' | 'dialog';
    legend?: string;
    children: Snippet;
    error?: string;
    onsubmit?: (e: SubmitEvent) => void;
    [key: string]: any;
  };

  let {
    action,
    method = 'get',
    legend,
    children,
    error,
    onsubmit,
    ...rest
  }: Props = $props();

  function handleSubmit(e: SubmitEvent) {
    onsubmit?.(e);
  }
</script>

<form {action} {method} onsubmit={handleSubmit} {...rest}>
  {#if error}
    <div role="alert" aria-live="assertive" data-alert data-intent="danger">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <span>{error}</span>
    </div>
  {/if}

  {#if legend}
    <fieldset>
      <legend>{legend}</legend>
      {@render children()}
    </fieldset>
  {:else}
    {@render children()}
  {/if}
</form>
