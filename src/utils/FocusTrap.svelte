<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		/** Whether the focus trap is active. */
		active?: boolean;
		/** Content to be trapped. */
		children: import('svelte').Snippet;
	};

	let { active = true, children }: Props = $props();

	let container: HTMLElement;

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (!active || e.key !== 'Tab' || !container) return;

			const elements = container.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), textarea:not([disabled]), input:not([type="hidden"]):not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
			);

			// Filter out elements that are hidden or not visible
			const focusableElements = Array.from(elements).filter(el => {
				if (el.closest('[aria-hidden="true"]') !== null) return false;
				const style = window.getComputedStyle(el);
				if (style.display === 'none' || style.visibility === 'hidden') return false;
				return true;
			});

			if (focusableElements.length === 0) {
				e.preventDefault();
				return;
			}

			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			const isOutside = !container.contains(document.activeElement);

			if (e.shiftKey) {
				if (isOutside || document.activeElement === firstElement) {
					lastElement.focus();
					e.preventDefault();
				}
			} else {
				if (isOutside || document.activeElement === lastElement) {
					firstElement.focus();
					e.preventDefault();
				}
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div bind:this={container} style="display: contents;">
	{@render children()}
</div>
