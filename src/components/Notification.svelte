<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import BrIcon from './BrIcon.svelte';

  type Intent = 'info' | 'tip' | 'warning' | 'danger';

  type Props = {
    id?: string;
    intent?: Intent;
    title: string;
    message?: string;
    dismissible?: boolean;
    ondismiss?: () => void;
    timeout?: number;
  };

  let {
    id = crypto.randomUUID(),
    intent = 'info',
    title,
    message,
    dismissible = true,
    ondismiss,
    timeout = 0,
    ...rest
  }: Props = $props();

  let visible = $state(true);
  let remainingTime = $state<number | undefined>();
  let startTime = $state<number | null>(null);
  let timerId = $state<number | null>(null);
  let isHovered = $state(false);
  let isFocused = $state(false);
  let paused = $derived(isHovered || isFocused);

  $effect(() => {
    if (timeout > 0 && remainingTime === undefined) remainingTime = timeout;
  });

  $effect(() => {
    if (remainingTime !== undefined && remainingTime > 0 && !paused && visible) {
      startTime = Date.now();
      timerId = window.setTimeout(() => handleDismiss(), remainingTime);
      return () => {
        if (timerId !== null) {
          clearTimeout(timerId);
          if (startTime !== null) remainingTime! -= Date.now() - startTime;
        }
      };
    }
  });

  function handleDismiss() {
    visible = false;
    ondismiss?.();
  }

  const iconMap: Record<Intent, string> = {
    info: 'cobogo-circular',
    tip: 'cobogo-hexagonal',
    warning: 'cobogo-losango',
    danger: 'cobogo-cruz',
  };

  const intentToAlertIntent: Record<Intent, 'info' | 'success' | 'warning' | 'danger'> = {
    info: 'info',
    tip: 'success',
    warning: 'warning',
    danger: 'danger',
  };

  const roleAttr = $derived(intent === 'danger' || intent === 'warning' ? 'alert' : 'status');
  const ariaLiveAttr = $derived(intent === 'danger' || intent === 'warning' ? 'assertive' : 'polite');

  let prefersReducedMotion = $state(false);
  $effect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = mediaQuery.matches;
    const handler = (e: MediaQueryListEvent) => (prefersReducedMotion = e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  });
</script>

{#if visible}
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <div
    {id}
    role={roleAttr}
    aria-live={ariaLiveAttr}
    data-intent={intentToAlertIntent[intent]}
    data-toast
    tabindex={timeout > 0 ? 0 : -1}
    transition:slide={{ duration: prefersReducedMotion ? 0 : 220, easing: cubicOut }}
    onmouseenter={() => (isHovered = true)}
    onmouseleave={() => (isHovered = false)}
    onfocusin={() => (isFocused = true)}
    onfocusout={(e) => {
      const ct = e.currentTarget as HTMLElement;
      const rt = e.relatedTarget as HTMLElement;
      if (!ct.contains(rt)) isFocused = false;
    }}
    {...rest}
  >
    <span aria-hidden="true">
      <BrIcon name={iconMap[intent]} size={24} color="currentColor" />
    </span>

    <div>
      <strong>{title}</strong>
      {#if message}<p>{message}</p>{/if}
    </div>

    {#if dismissible}
      <button type="button" data-intent="link" aria-label="Dismiss notification" onclick={handleDismiss}>
        <span aria-hidden="true">&times;</span>
      </button>
    {/if}
  </div>
{/if}
