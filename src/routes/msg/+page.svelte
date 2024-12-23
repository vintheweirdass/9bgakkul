<script lang="ts">
    import { page } from "$app/stores";
    import { granted, writeText } from "$lib/modules/clipboard";
    import Message from "$lib/parts/Message.svelte";
    import { OptionSchema } from "$lib/parts/types/Message";
    import * as valibot from "valibot"
    const searchParams = $page.url.searchParams
    let name = $state<string>(searchParams.get("name")!)
    let description = $state<string>(searchParams.get("description")!)
    let spotifySong = $state<string|undefined>(searchParams.get("spotifySong")??undefined)
    const res:Record<string, unknown> = {}
    for (const [k, v] of ($page.url.searchParams).entries()) res[k] = v
    let parse = $state<valibot.SafeParseResult<typeof OptionSchema>|undefined>() 
    valibot.safeParseAsync(OptionSchema,res).then(e=>parse=e).catch(()=>{})
</script>
<svelte:head>
    <title>Message Maker</title>
</svelte:head>
<section>
{#if !parse?.success}
<h1>Whoops! Error parsing the link</h1>
<p><b>Check the link and try again</b></p>
{#if parse?.issues}
{#each parse?.issues as ok}
<p>{ok.message}</p>
{/each}
{/if}
{:else}
<Message {name} {description} {spotifySong} />
{/if}
</section>
<style>
    section {
        text-align: center;
    }
</style>