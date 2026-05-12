<script>
  export let headers = [];
  export let data = [];
  export let caption = '';
  export let variant = 'default';

  // Map localized/display status labels to the small set of status tokens
  // styled in global.css: active | pending | inactive | error.
  const STATUS_TOKEN_MAP = {
    ativo: 'active',
    active: 'active',
    concluido: 'active',
    concluído: 'active',
    success: 'active',
    pendente: 'pending',
    pending: 'pending',
    'em revisao': 'pending',
    'em revisão': 'pending',
    inativo: 'inactive',
    inactive: 'inactive',
    cancelado: 'error',
    cancelled: 'error',
    canceled: 'error',
    erro: 'error',
    error: 'error',
  };

  function statusToken(value) {
    if (!value) return undefined;
    const normalized = String(value).trim().toLowerCase();
    return STATUS_TOKEN_MAP[normalized];
  }
</script>

<figure data-table data-variant={variant} tabindex="0" aria-label={caption || 'Tabela de dados'}>
  <table>
    {#if caption}<caption>{caption}</caption>{/if}
    <thead>
      <tr>
        {#each headers as header}
          <th scope="col" style:text-align={header.align || 'left'}>{header.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          {#each headers as header}
            <td style:text-align={header.align || 'left'}>
              {#if header.key === 'status'}
                <small data-status={statusToken(row[header.key])}>{row[header.key]}</small>
              {:else}
                {row[header.key]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</figure>
