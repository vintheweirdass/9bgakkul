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

<div class="message-each-root">
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