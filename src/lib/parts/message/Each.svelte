<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        name,
        className,
        field = false,
    }: {
        children: Snippet;
        name: string;
        field?: boolean;
        className?: string;
    } = $props();

    let derivedClass = $derived(`message-each ${className??""}`)
</script>

<div>
    {#if field}
        <fieldset class={derivedClass}>
            <legend>{name}</legend>
            {@render children()}
        </fieldset>
    {:else}
        <div class={derivedClass}>
        {@render children()}
        </div>
    {/if}
</div>
<style scoped>
    .message-each {
        display: flex;
        flex: 1 0.3 auto;
        row-gap: 10px;
        flex-direction: column;
        align-items: center;
    }
</style>