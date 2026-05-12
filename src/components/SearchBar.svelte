<script>
  import { createEventDispatcher } from 'svelte';

  export let placeholder = 'Buscar em todo o acervo...';
  export let value = '';
  export let filters = [];

  const dispatch = createEventDispatcher();

  function handleInput(e) {
    dispatch('search', e.target.value);
  }
  function toggleFilter(id) {
    dispatch('filter', id);
  }
</script>

<search>
  <form role="search" data-search-bar>
    <label>
      <span class="sr-only">{placeholder}</span>
      <span aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
      </span>
      <input type="search" {placeholder} bind:value oninput={handleInput} />
    </label>
    <button type="submit" data-intent="primary">Buscar</button>
  </form>

  {#if filters.length > 0}
    <fieldset aria-label="Filtros disponíveis" data-filter-list>
      <legend><small data-kicker>Filtrar por</small></legend>
      {#each filters as filter}
        <button
          type="button"
          data-chip
          aria-pressed={filter.active ? 'true' : 'false'}
          onclick={() => toggleFilter(filter.id)}
        >
          {filter.label}
        </button>
      {/each}
    </fieldset>
  {/if}
</search>
