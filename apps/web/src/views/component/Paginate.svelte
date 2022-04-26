<script>
    export let url;
    export let paginateMeta;

    let nextPage     = paginateMeta.currentPage + 1;
    let previousPage = paginateMeta.currentPage - 1;
    let startPage    = (paginateMeta.currentPage > 3 ? ((paginateMeta.totalPages - paginateMeta.currentPage) < 3 ? paginateMeta.totalPages - 4 : paginateMeta.currentPage - 2) : 1);
    let endPage      = paginateMeta.totalPages < startPage + 4 ? paginateMeta.totalPages : startPage + 4;
    
    const link = (page) => `${url}?page=${page}`;
</script>

{#if paginateMeta.totalPages > 1}
<nav>
    <ul class="pagination">
        {#if paginateMeta.currentPage > 1}
            <li><a href={link(previousPage)}>&lsaquo;</a></li>
        {/if}

        {#each Array.from(Array(endPage+1).keys()).slice(startPage) as i}
            <li><a href={link(i)}>{i}</a></li>
        {/each}

        {#if paginateMeta.totalPages > paginateMeta.currentPage}
            <li><a href={link(nextPage)}>&rsaquo;</a></li>
        {/if}
    </ul>
</nav>
{/if}