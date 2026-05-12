<script lang="ts">
  let {
    title,
    description,
    pubDate,
    tags = [],
    slug,
    heroImage,
    variant = 'compact',
  } = $props<{
    title: string;
    description: string;
    pubDate: string;
    tags?: string[];
    slug: string;
    heroImage?: string;
    variant?: 'compact' | 'featured';
  }>();
</script>

<article data-post-card data-variant={variant} data-interactive>
  {#if heroImage}
    <figure>
      <a href={`/cobogo/blog/${slug}`}><img src={heroImage} alt="" /></a>
    </figure>
  {/if}

  <header>
    {#if tags.length > 0}
      <p>
        {#each tags as tag}<small data-kicker>{tag}</small>{/each}
      </p>
    {/if}

    <h3><a href={`/cobogo/blog/${slug}`}>{title}</a></h3>
    {#if description}<p>{description}</p>{/if}
  </header>

  <footer>
    <time>{pubDate}</time>
    <span aria-hidden="true">→</span>
  </footer>
</article>
