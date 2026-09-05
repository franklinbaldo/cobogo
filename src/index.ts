// Cobogó — curated component entrypoint
// Components are exported deliberately; internal files are not the public API.

// Foundations and simple interactive building blocks.
export { default as Button } from './components/Button.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Badge } from './components/Badge.svelte';
export { default as Disclosure } from './components/Disclosure.svelte';

// Data, navigation and status.
export { default as SearchBar } from './components/SearchBar.svelte';
export { default as Timeline } from './components/Timeline.svelte';
export { default as FilterBar } from './components/FilterBar.svelte';
export { default as Pagination } from './components/Pagination.svelte';
export { default as Breadcrumbs } from './components/Breadcrumbs.svelte';

// Forms and selection.
export { default as FormField } from './components/FormField.svelte';
export { default as TextInput } from './components/TextInput.svelte';
export { default as Select } from './components/Select.svelte';
export { default as Checkbox } from './components/Checkbox.svelte';
export { default as Radio } from './components/Radio.svelte';
export { default as Switch } from './components/Switch.svelte';
export { default as FileInput } from './components/FileInput.svelte';
export { default as Combobox } from './components/Combobox.svelte';
export { default as MultiSelect } from './components/MultiSelect.svelte';
export { default as DatePicker } from './components/DatePicker.svelte';
export { default as TimePicker } from './components/TimePicker.svelte';
export { default as DateRangePicker } from './components/DateRangePicker.svelte';
export { default as TimeRangePicker } from './components/TimeRangePicker.svelte';

// Mutually exclusive content.
export { default as Tabs } from './components/Tabs.svelte';
export { default as TabList } from './components/TabList.svelte';
export { default as Tab } from './components/Tab.svelte';
export { default as TabPanel } from './components/TabPanel.svelte';
export { default as Tooltip } from './components/Tooltip.svelte';

// Modal composition is public as a coordinated family.
export { default as Dialog } from './components/Dialog/Dialog.svelte';
export { default as DialogHeader } from './components/Dialog/DialogHeader.svelte';
export { default as DialogBody } from './components/Dialog/DialogBody.svelte';
export { default as DialogFooter } from './components/Dialog/DialogFooter.svelte';
export { default as Drawer } from './components/Drawer/Drawer.svelte';
export { default as DrawerHeader } from './components/Drawer/DrawerHeader.svelte';
export { default as DrawerBody } from './components/Drawer/DrawerBody.svelte';
export { default as DrawerFooter } from './components/Drawer/DrawerFooter.svelte';

// Decorative vocabulary maintained as part of the current public API.
export { default as Stamp } from './components/decorative/Stamp.svelte';
export { default as Lambe } from './components/decorative/Lambe.svelte';
export { default as Sign } from './components/decorative/Sign.svelte';
export { default as Pennant } from './components/decorative/Pennant.svelte';
export { default as Bandeirinhas } from './components/decorative/Bandeirinhas.svelte';
export { default as Foliage } from './components/decorative/Foliage.svelte';
export { default as RiverMap } from './components/decorative/RiverMap.svelte';
