// Cobogó — curated component entrypoint
// Components are exported deliberately; internal files are not the public API.

export { default as Button } from './components/Button.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Badge } from './components/Badge.svelte';
export { default as ProfileCard } from './components/ProfileCard.svelte';
export { default as DataTable } from './components/DataTable.svelte';
export { default as SearchBar } from './components/SearchBar.svelte';
export { default as Disclosure } from './components/Disclosure.svelte';

// Legacy palette reference. Semantic styling belongs to the CSS core and will be
// handled separately from component-surface consolidation.
export const tokens = {
  colors: {
    papel: "#F5F1E8",
    azul: "#1B2B4B",
    vermelho: "#C8472E",
    ocre: "#D9A441",
    verde: "#2E6B4A"
  }
};
export { default as Tabs } from './components/Tabs.svelte';
export { default as TabList } from './components/TabList.svelte';
export { default as Tab } from './components/Tab.svelte';
export { default as TabPanel } from './components/TabPanel.svelte';
export { default as Grid } from './components/Grid.svelte';
export { default as Column } from './components/Column.svelte';
export { default as Tooltip } from './components/Tooltip.svelte';
export { default as Combobox } from './components/Combobox.svelte';
export { default as DateRangePicker } from './components/DateRangePicker.svelte';
export { default as TimeRangePicker } from './components/TimeRangePicker.svelte';
