<script>
    import Layout from "./Layout.svelte";

    export let props;
</script>

<svelte:head>
    <title>Error {props.status}</title>
</svelte:head>

<Layout>
    <div class="d-flex align-items-center justify-content-center">
        <h1>{props.status} | {props.message}</h1>
    </div>
</Layout>