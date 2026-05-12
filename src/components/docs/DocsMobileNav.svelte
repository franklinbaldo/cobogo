<script lang="ts">
  type Entry = { slug: string; title: string; section: string; order: number };
  type Props = { entries: Entry[]; currentSlug: string; open: boolean };

  let { entries, currentSlug, open = $bindable(false) }: Props = $props();

  let sections = $derived(Array.from(new Set(entries.map((e) => e.section))));
  let groupedEntries = $derived(
    sections.reduce((acc, section) => {
      acc[section] = entries.filter((e) => e.section === section);
      return acc;
    }, {} as Record<string, Entry[]>)
  );

  let closeBtnElement: HTMLButtonElement | undefined = $state(undefined);

  $effect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      if (closeBtnElement) closeBtnElement.focus();
    } else {
      document.body.style.overflow = '';
      const trigger = document.getElementById('mobile-nav-trigger');
      if (trigger && document.activeElement === closeBtnElement) trigger.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  });

  $effect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) open = false;
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  $effect(() => {
    function handleToggleEvent() { open = !open; }
    window.addEventListener('toggleMobileNav', handleToggleEvent);
    return () => window.removeEventListener('toggleMobileNav', handleToggleEvent);
  });
</script>

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div data-mobile-nav-backdrop onclick={() => (open = false)}></div>
{/if}

<aside id="mobile-nav" data-mobile-nav data-open={open ? '' : undefined}>
  <header>
    <strong>COBOGÓ</strong>
    <button
      type="button"
      data-intent="link"
      bind:this={closeBtnElement}
      aria-label="Close navigation"
      onclick={() => (open = false)}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </header>

  <nav>
    {#each sections as section}
      <div data-nav-section>
        <h3>{section}</h3>
        <ul>
          {#each groupedEntries[section] as entry}
            {@const isActive = currentSlug === `/cobogo/docs/${entry.slug}/` || currentSlug === `/cobogo/docs/${entry.slug}`}
            <li>
              <a
                href={`/cobogo/docs/${entry.slug}/`}
                aria-current={isActive ? 'page' : undefined}
                onclick={() => (open = false)}
              >
                {entry.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </nav>
</aside>
