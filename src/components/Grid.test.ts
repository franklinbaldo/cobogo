import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import GridTest from './Grid.test.svelte';

describe('Grid Atom', () => {
	it('should render a grid container with default styles', () => {
		render(GridTest);
		const grid = screen.getByTestId('grid');
		expect(grid).toBeInTheDocument();
		expect(grid).toHaveStyle({
			display: 'grid',
			gap: '2rem'
		});
		expect(grid.style.gridTemplateColumns).toBe('repeat(12,1fr)');
		expect(screen.getByTestId('grid-child')).toBeInTheDocument();
	});

	it('should allow overriding columns and gap', () => {
		render(GridTest, { props: { columns: 4, gap: '1rem' } });
		const grid = screen.getByTestId('grid');
		expect(grid.style.gridTemplateColumns).toBe('repeat(4,1fr)');
		expect(grid).toHaveStyle({ gap: '1rem' });
	});

	it('should render as a different HTML element', () => {
		render(GridTest, { props: { as: 'section' } });
		const grid = screen.getByTestId('grid');
		expect(grid.tagName).toBe('SECTION');
	});
});
