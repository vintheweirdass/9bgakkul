<script lang="ts">
    import {
        friendsList,
        friendsListInfer,
        providers,
    } from "$lib/modules/friendsList";
    import isNumber from "is-number";
    const {
        name,
        inferName,
        full = false,
    }: {
        name?: keyof typeof friendsList;
        inferName?: string;
        full?: boolean;
    } = $props();
    let n = name ?? inferName!;
</script>

<div class="smblnparts-friend">
    <h4>{n}</h4>
    {#if friendsListInfer[n]["description"]}
        <p>
            {friendsListInfer[n]["description"]}
        </p>
    {/if}
    {#if full}
        {@const social = friendsListInfer[n]["social"]}
        {@const ownsDomain = friendsListInfer[n]["ownsDomain"]}
        {#if social}
            <h2><strong>Socials</strong></h2>
            {#snippet socialName(name: keyof typeof providers)}
                {#if social[name] && social[name].length > 0}
                    <h3><i>{name}</i></h3>
                    <ul class="social">
                        {#each social[name] as id}
                            <li>
                                <a href={`${providers[name]}${id}`}>{isNumber(id)?name:id}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            {/snippet}
            {#each Object.keys(providers) as provider}
                {@render socialName(provider as keyof typeof providers)}
            {/each}
        {/if}
        {#if ownsDomain}
            <h2><strong>Domains owned</strong></h2>
            <ul class="domain-list">
                {#each ownsDomain as domain}
                    {@const path:string=domain==="@"?"/":domain}
                    {@const name:string=domain==="@"?"9b.is-not.cool":domain}
                    <li><a href={path}>{name}</a></li>
                {/each}
            </ul>
        {/if}
    {:else}
        <a
            class="about-this"
            aria-label="About this person"
            href={`/friends/${n}`}>About this person</a
        >
    {/if}
</div>

<style scoped>
    .smblnparts-friend {
        background-color: rgba(0, 0, 0, 0.071);
        padding: 10px;
        border-radius: 10px;
        text-align: center;
    }
    .smblnparts-friend > .about-this {
        font-size: larger;
    }
    .smblnparts-friend .domain-list {
        display: flex;
        font-size: larger;
        justify-items:center;
        justify-content: center;
    }
    .smblnparts-friend .social {
        font-size: larger;
        justify-items:center;
        justify-content: center;
    }
</style>
