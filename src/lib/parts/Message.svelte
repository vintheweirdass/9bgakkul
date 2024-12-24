<script lang="ts">
    import { fade } from "svelte/transition";
    import { Profanity } from "@2toad/profanity";
    import { type Option, spotifySongRegexHtml } from "./types/Message";
    import { copy } from "svelte-copy";
    import { compress } from "$lib/modules/compressString";
    let {
        name = $bindable(),
        description = $bindable(),
        spotifySong = $bindable(),
        spotifySongId = $bindable(),
        editorMode,
        onsubmit,
    }: Option = $props();
    const editor = editorMode ?? false;
    // const editor = true
    /*
    Censorship (just to play safe with the domain owner (is-not.cool))
    */
    const profanity = new Profanity({
        languages: ["en", "es"],
        wholeWord: false,
        grawlix: "🚫",
        grawlixChar: "$",
    });
    /*
    NAME
     */
    const defaultSpotifySong = "1R28m5eWk1EV9FQ3puWrUp";
    // svelte-ignore state_referenced_locally
    let toggleSpotify = $state<boolean>(false);
    let toggleSpotifyDefaultSong = $state<boolean>(false);

    let toggleDisplay = $state<boolean>(true);

    let paramsObj = $derived(
        (spotifySongId
            ? { name, description, spotifySongId }
            : { name, description }) as Record<string, string>,
    );
    let linkCopied = $state(false);
    // svelte-ignore state_referenced_locally
    let spotifySongBefore = $state<string|undefined>(undefined);
    if (typeof spotifySong !== "undefined" && typeof spotifySongId === "undefined") {
        spotifySongId = new URL(
                spotifySong ? spotifySong : "https://example.com/o/o/o",
            ).pathname.split("/")[2];
    }
    let obfuscateLink = $state<boolean>(false)
    $effect(() => {
        if (spotifySong !== spotifySongBefore) {
            spotifySongId = new URL(
                spotifySong ? spotifySong : "https://example.com/o/o/o",
            ).pathname.split("/")[2];
        } if (name.length > 0) {
            name = profanity.censor(name);
        } else if (description.length > 0) {
            description = profanity.censor(description);
        }
        spotifySongBefore = spotifySong;
    });
    const paramsObjString = $derived(new URLSearchParams(paramsObj).toString())
</script>

<div class="smblnparts-message">
    <div class="main">
        {#if editor}
            <form
                onsubmit={(e) => {
                    e.preventDefault();
                }}
                use:copy={{
                    text: (obfuscateLink?`${location.origin}/msg/${compress(paramsObjString)}`:`${location.origin}/msg?${paramsObjString}`),
                    events: ["submit"],
                    onCopy(_) {
                        linkCopied = true;
                        setTimeout(() => {
                            linkCopied = false;
                        }, 5000);
                    },
                    onError({ error }) {
                        alert(`Failed to copy link: ${error.message}`);
                    },
                }}
            >
                <label for="name">Name</label>
                <input
                    name="name"
                    bind:value={name}
                    minlength={1}
                    maxlength={50}
                    required
                />
                <input
                    type="button"
                    value="Toggle spotify"
                    onclick={() => {
                        toggleSpotify = !toggleSpotify;
                    }}
                />
                {#if toggleSpotify}
                    <label for="spotifySong">Spotify song</label>
                    {#if !toggleSpotifyDefaultSong}
                        <input
                            title="Spotify Track/song link"
                            name="spotifySong"
                            pattern={spotifySongRegexHtml}
                            required={!toggleSpotifyDefaultSong}
                            bind:value={spotifySong}
                        />
                    {/if}
                    <input
                        type="button"
                        value="Change to {toggleSpotifyDefaultSong
                            ? 'preferred'
                            : 'default'} song"
                        onclick={() => {
                            toggleSpotifyDefaultSong =
                                !toggleSpotifyDefaultSong;
                            if (toggleSpotifyDefaultSong) {
                                spotifySong = `https://open.spotify.com/track/${defaultSpotifySong}`;
                            } else {
                                spotifySong = "";
                            }
                        }}
                    />
                    {#if toggleSpotifyDefaultSong}
                        <a
                            href={`https://open.spotify.com/track/${defaultSpotifySong}`}
                            >Fazers - King Geedorah</a
                        >
                    {/if}
                {/if}
                <label for="description">Description</label>
                <textarea
                    name="description"
                    class="description-input"
                    bind:value={description}
                    minlength={1}
                    maxlength={1500}
                    required
                ></textarea>
                <button onclick={()=>obfuscateLink=true}>Generate Link</button>
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label>Or</label>
                <button onclick={()=>obfuscateLink=false}>Generate Exposed Link</button>

                {#if linkCopied}
                    <input readonly value="Link copied!" />
                {/if}
            </form>
            <hr />
        {/if}
        <div in:fade class="display{editor ? ' editor' : ''}">
            {#if editor}
                <button
                    onclick={() => {
                        toggleDisplay = !toggleDisplay;
                    }}>Toggle preview</button
                >
            {/if}
            {#if toggleDisplay}
                <h2 class="name-header">
                    From your friend, <br /><b>{name!}</b>
                </h2>
                {#if (editor && toggleSpotify) || (!editor && (spotifySong||spotifySongId))}
                    <iframe
                        title="Spotify playlist"
                        style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/{spotifySongId}?utm_source=generator"
                        width="228"
                        height="200"
                        frameBorder="0"
                        allowfullscreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                {/if}
                heres the desc:
                <textarea readonly>{description}</textarea>
            {/if}
        </div>
    </div>
</div>

<style scoped>
    div.smblnparts-message {
        display: flex;
        justify-content: center;
    }
    div.smblnparts-message > div.main {
        display: flex;
        flex-direction: column;
        max-width: max-content;
        gap: 10px;
    }
    div.smblnparts-message > div.main > form {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div.smblnparts-message > div.main > div.display {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .name-header {
        font-weight: normal;
        font-size: larger;
    }
    textarea {
        min-width: 250px;
        min-height: 100px;
        max-width: 250px;
        max-height: 100px;
        font-family: "Space Grotesk";
        font-size: medium;
    }
    .display > textarea {
        background-color: transparent;
    }
    @media only screen and (min-width: 600px) {
        div.smblnparts-message > div.main {
            flex-direction: row-reverse;
        }
    }
    @media only screen and (max-width: 600px) {
        div.smblnparts-message > div.main > :global(div.display.editor) {
            display: none;
        }
    }
</style>
