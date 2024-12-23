<script lang="ts">
    import { effect, ev } from "$lib/modules/nf.svelte";
    import { Profanity } from "@2toad/profanity";
    import Icon from "./Icon.svelte";
    import Each from "./message/Each.svelte";
    import {
        OptionSchema,
        type Option,
        spotifySongRegexHtml,
    } from "./types/Message";
    import * as valibot from "valibot";
    import { superForm } from "sveltekit-superforms";
    import { copy } from "svelte-copy";
    import { preventDefault } from "svelte/legacy";
    let {
        name = $bindable(),
        description = $bindable(),
        spotifySong = $bindable(),
        editorMode,
        onsubmit,
    }: Option = $props();
    const editor = editorMode ?? false;
    // const editor = true

    const generalOpt = { name, description, spotifySong };

    let submit = $state<HTMLButtonElement | undefined>(undefined);
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
    DESCRIPTION
    */
    let inputDescription = $state<string>(description ?? "");
    // svelte-ignore state_referenced_locally
    let inputDescriptionBefore = $state<string>(inputDescription);
    let descriptionFiltered = $state<boolean>(true);

    /*
    NAME
     */
    let inputName = $state<string>("");
    const defaultSpotifySong =
        "https://open.spotify.com/track/1R28m5eWk1EV9FQ3puWrUp";
    // svelte-ignore state_referenced_locally
    let toggleSpotify = $state<boolean>(false);
    let toggleSpotifyDefaultSong = $state<boolean>(false);

    let toggleDisplay = $state<boolean>(true);
    effect(() => {
        if (name.length > 0) {
            name = profanity.censor(name);
        }
        if (description.length > 0) {
            description = profanity.censor(description);
        }
    });
    let paramsObj = $derived({ name, description, spotifySong } as Record<
        string,
        string
    >);
    // svelte-ignore state_referenced_locally
    let linkCopied = $state(false);
</script>

<div class="smblnparts-message">
    <div class="main">
        {#if editor}
            <form
                onsubmit={(e) => {
                    e.preventDefault();
                }}
                use:copy={{
                    text: `${location.origin}/msg?${new URLSearchParams(paramsObj).toString()}`,
                    events: ["submit"],
                    onCopy({ text, event }) {
                        linkCopied = true;
                        setTimeout(() => {
                            linkCopied = false;
                        }, 5000);
                    },
                    onError({ error, event }) {
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
                                spotifySong = defaultSpotifySong;
                            } else {
                                spotifySong = "";
                            }
                        }}
                    />
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
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <input type="submit" value="Generate link" />
                {#if linkCopied}
                    <input readonly value="Link copied!" />
                {/if}
            </form>
            <hr />
        {/if}
        <div class="display{editor?" editor":""}">
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
                {@const spotifySongResult = new URL(
                    spotifySong ? spotifySong : "https://example.com/o/o/o",
                ).pathname.split("/")[2]}
                {#if toggleSpotify || (!editor)}
                    <iframe
                        title="Spotify playlist"
                        style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/{spotifySongResult}?utm_source=generator"
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
