<script lang="ts">
	import { getContext } from 'svelte';
	import TimePicker from './TimePicker.svelte';

	/**
	 * TimeRangePicker Component
	 *
	 * An organism composed of two TimePicker molecules for selecting a time range.
	 * Follows the Curva & Concreto doctrine.
	 *
	 * @prop {string} start - The bindable start time value.
	 * @prop {string} end - The bindable end time value.
	 * @prop {string} [min] - The global minimum allowed time.
	 * @prop {string} [max] - The global maximum allowed time.
	 * @prop {boolean} [disabled=false] - Whether the inputs are disabled.
	 * @prop {boolean} [invalid=false] - Whether the inputs are in an invalid state.
	 * @prop {boolean} [valid=false] - Whether the inputs are in a valid state.
	 * @prop {'sm'|'md'|'lg'} [size='md'] - The size variant of the inputs.
	 */
	let {
		start = $bindable(),
		end = $bindable(),
		min,
		max,
		disabled = false,
		invalid = false,
		valid = false,
		size = 'md',
		...rest
	}: {
		start?: string;
		end?: string;
		min?: string;
		max?: string;
		disabled?: boolean;
		invalid?: boolean;
		valid?: boolean;
		size?: 'sm' | 'md' | 'lg';
		[key: string]: any;
	} = $props();

	const formFieldContext = getContext<() => { id: string; 'aria-describedby'?: string; invalid: boolean; valid: boolean; required: boolean }>('cobogo-form-field');
	let ctx = $derived(formFieldContext ? formFieldContext() : null);

	let finalInvalid = $derived(invalid || ctx?.invalid || false);
	let finalValid = $derived((valid || ctx?.valid || false) && !finalInvalid);
	let finalRequired = $derived(rest.required || ctx?.required || false);

	let startMax = $derived(end ? (max && max < end ? max : end) : max);
	let endMin = $derived(start ? (min && min > start ? min : start) : min);
</script>

<div data-range-picker {...rest}>
	<div
		data-cobogo-pattern="grid"
		style="--cobogo-grid-gap: 1rem"
	>
		<div style="--cobogo-grid-span: 12; --cobogo-grid-span-sm: 6">
			<TimePicker
				bind:value={start}
				min={min}
				max={startMax}
				{disabled}
				invalid={finalInvalid}
				valid={finalValid}
				{size}
				required={finalRequired}
				aria-label="Start time"
				id={ctx?.id ? `${ctx.id}-start` : undefined}
				aria-describedby={ctx?.['aria-describedby']}
			/>
		</div>
		<div style="--cobogo-grid-span: 12; --cobogo-grid-span-sm: 6">
			<TimePicker
				bind:value={end}
				min={endMin}
				max={max}
				{disabled}
				invalid={finalInvalid}
				valid={finalValid}
				{size}
				required={finalRequired}
				aria-label="End time"
				id={ctx?.id ? `${ctx.id}-end` : undefined}
				aria-describedby={ctx?.['aria-describedby']}
			/>
		</div>
	</div>
</div>
