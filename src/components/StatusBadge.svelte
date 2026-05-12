<script lang="ts">
  type Props = {
    status: 'active' | 'pending' | 'inactive' | 'error' | 'success';
    label?: string;
  };

  let { status, label }: Props = $props();
  let resolvedLabel = $derived(label || status.charAt(0).toUpperCase() + status.slice(1));
  let dataStatus = $derived(status === 'success' ? 'active' : status);
</script>

<span data-status={dataStatus}>
  <span aria-hidden="true" data-status-dot></span>
  {resolvedLabel}
</span>
