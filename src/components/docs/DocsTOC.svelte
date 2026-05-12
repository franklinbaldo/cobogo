<script lang="ts">
  import { onMount } from 'svelte';

  type Heading = { depth: number; slug: string; text: string };
  type Props = { headings: Heading[] };

  let { headings = [] }: Props = $props();
  let activeSlug = $state('');

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) activeSlug = visible[0].target.id;
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );
    const headingElements = document.querySelectorAll('h2, h3');
    headingElements.forEach((el) => observer.observe(el));
    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  });

  function handleClick(e: MouseEvent, slug: string) {
    e.preventDefault();
    const target = document.getElementById(slug);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${slug}`);
    }
  }
</script>

<nav data-toc aria-label="Table of Contents">
  <h2 data-toc-heading>On this page</h2>
  <ul>
    {#each headings.filter((h) => h.depth === 2 || h.depth === 3) as heading}
      <li data-depth={heading.depth}>
        <a
          href={`#${heading.slug}`}
          aria-current={activeSlug === heading.slug ? 'true' : undefined}
          onclick={(e) => handleClick(e, heading.slug)}
        >
          {heading.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>
