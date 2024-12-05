<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
</script>

<h2>{$page.status}</h2>
<h4>{$page.error?.message}</h4>
<button onclick={() => goto("/")}>Go to home</button>
