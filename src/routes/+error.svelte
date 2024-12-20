<svelte:head>
    <title>Error</title>
</svelte:head>
<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
</script>
<div>
<h1>{$page.status}</h1>
<h4>{$page.error?.message}</h4>
<button onclick={() => goto("/")}>Go to home</button>
</div>

<style scoped>
    div {
        display:flex;
        flex-direction: column;
        text-align: center;
    }
    
    button {
        border:none;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.075);
        padding: 10px;
        cursor: pointer;
    }
</style>