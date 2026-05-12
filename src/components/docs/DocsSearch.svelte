<script lang="ts">
  import { onMount } from 'svelte';

  let dialog: HTMLDialogElement;
  let isMac = $state(false);

  onMount(() => {
    isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  function handleOpen() {
    dialog?.showModal();
    initPagefind();
  }
  function handleClose() {
    dialog?.close();
  }

  let pagefindLoaded = false;
  async function initPagefind() {
    if (pagefindLoaded) return;
    try {
      const PagefindUI = await import('@pagefind/default-ui');
      new PagefindUI.PagefindUI({
        element: '#pagefind-container',
        showSubResults: true,
        baseUrl: '/cobogo/',
      });
      pagefindLoaded = true;
    } catch (e) {
      console.error('Failed to load Pagefind UI', e);
    }
  }
</script>

<button type="button" data-search-trigger data-intent="link" onclick={handleOpen} aria-label="Search">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
  <span>Search</span>
  <kbd>{isMac ? '⌘K' : 'Ctrl+K'}</kbd>
</button>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  data-search-modal
  onclick={(e) => {
    if (e.target === dialog) handleClose();
  }}
>
  <div data-search-panel>
    <div data-search-header>
      <button type="button" data-intent="link" rel="prev" onclick={handleClose} aria-label="Close search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <div id="pagefind-container"></div>
  </div>
</dialog>
