<script lang="ts">
    import { page } from "$app/stores";
    import Icon from "$lib/parts/Icon.svelte";
    import Message from "$lib/parts/Message.svelte";
    import { OptionSchema } from "$lib/parts/types/Message";
    import * as valibot from "valibot";
    import { slide } from "svelte/transition";
    const searchParams = $page.url.searchParams;
    let name = $state<string>(searchParams.get("name")!);
    let description = $state<string>(searchParams.get("description")!);
    let spotifySong = $state<string | undefined>(
        searchParams.get("spotifySong") ?? undefined,
    );
    let spotifySongId = $state<string | undefined>(
        searchParams.get("spotifySongId") ?? undefined,
    );
    const res: Record<string, unknown> = {};
    for (const [k, v] of $page.url.searchParams.entries()) res[k] = v;
    let parse = $state<
        valibot.SafeParseResult<typeof OptionSchema> | undefined
    >();
    valibot
        .safeParseAsync(OptionSchema, res)
        .then((e) => (parse = e))
        .catch(() => {});
</script>

<svelte:head>
    <title>Message Maker</title>
</svelte:head>
<section>
    {#if !parse}
        <h2 out:slide><b>
            Loading <Icon name="loader-2-line" class="loading"/>
        </b></h2>
    {:else}
        {#if parse.success}
            <Message {name} {description} {spotifySong} {spotifySongId}/>
        {:else}
            <h1>Whoops! Error parsing the link</h1>
            <p><b>Check the link and try again</b></p>
            {#if parse?.issues}
                {#each parse.issues as err}
                    <p>{err.message}</p>
                {/each}
            {/if}
        {/if}
    {/if}
</section>

<style>
    @keyframes loading-spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    section {
        text-align: center;
    }
    section :global(.loading) {
        animation: loading-spin 2s 0s infinite linear;
    }
</style>
