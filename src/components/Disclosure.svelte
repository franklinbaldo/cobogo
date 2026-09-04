<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    name?: string;
    open?: boolean;
    disabled?: boolean;
    children: Snippet;
  };

  let {
    title,
    name,
    open = $bindable(false),
    disabled = false,
    children,
  }: Props = $props();

  function handleToggle(event: Event) {
    const details = event.target as HTMLDetailsElement;
    if (disabled) {
      details.open = false;
      open = false;
      return;
    }
    open = details.open;
  }

  function handleClick(event: MouseEvent) {
    if (disabled) event.preventDefault();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
    }
  }
</script>

<details
  {name}
  {open}
  aria-disabled={disabled}
  ontoggle={handleToggle}
>
  <summary
    onclick={handleClick}
    onkeydown={handleKeydown}
    tabindex={disabled ? -1 : 0}
  >
    {title}
  </summary>
  {@render children()}
</details>
