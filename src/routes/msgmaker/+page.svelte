<script lang="ts">
    import Message from "$lib/parts/Message.svelte";
    let name = $state<string>("");
    let description = $state<string>("");
    let spotifySong = $state<string>("");
    // svelte-ignore state_referenced_locally
</script>

<svelte:head>
    <title>Message Maker</title>
</svelte:head>
<section>
    <h1>Message Maker</h1>
    <Message
            editorMode={true}
            bind:name
            bind:description
            bind:spotifySong
    />
</section>

<style>
    section {
        text-align: center;
    }
</style>
