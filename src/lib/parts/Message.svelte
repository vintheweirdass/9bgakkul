<script lang="ts">
    import { effect, ev } from "$lib/modules/nf.svelte";
    import Icon from "./Icon.svelte";
    import Each from "./message/Each.svelte";
    import type { Option } from "./types/Message";
    let opt: Option = $props();
    const editor = typeof opt === "undefined" || Object.keys(opt).length < 1;
    // const editor = true
    //


    /*
    NAME
     */
    let inputName = $state<string>("");

    /*
    SPOTIFY
    */
    let spotifySongChanged = $state<boolean>(false)
    const spotifyLinkMatch = /^http(s)?:\/\/open\.spotify\.com\/track\/([0-9a-zA-z]+)(\?[0-9a-zA-z_]+=[0-9a-zA-z_]+)?$/;
    let enableSpotifySong = $state<boolean>(false);
    // PRIDE. - KDot
    let defaultSpotifySong = "2RxBL0SXqHHCy70WF4i3Se";
    let inputSpotifySong = $state<string>("");
    // svelte-ignore state_referenced_locally
    let spotifySong = $state<string>(opt?.spotifySong ?? defaultSpotifySong);
</script>

<div class="smblnparts-message">
    <Each name="Name" field={editor}>
        {#if editor}
        <input bind:value={inputName}>
        {/if}
        From your friend, <b>{inputName}</b>
    </Each>
    <Each name="Spotify" field={editor}>
        <button style="display:flex; align-items:center" onclick={() => {
            enableSpotifySong = !enableSpotifySong
            if (enableSpotifySong) spotifySongChanged = false
        }}
            >{enableSpotifySong ? "Dis" : "En"}able <Icon name="spotify-fill"/></button>
        {#if enableSpotifySong}
            {#if editor} 
                <form
                    onsubmit={ev("prevent", () => {
                        spotifySongChanged = true
                        spotifySong = (new URL(inputSpotifySong)).pathname.split("/")[2]
                    })}
                >
                    <input
                        pattern="^http(s)?:\/\/open\.spotify\.com\/track\/([0-9a-zA-z]+)(\?[0-9a-zA-z_]+=[0-9a-zA-z_]+)?$"
                        title="Spotify Track/song link (not Embed link)"
                        bind:value={inputSpotifySong}
                        required
                    />
                    <input type="submit" value="Apply" />
                </form>
            {/if}
            {#if !spotifySongChanged}
                Heres the preview if you put the link
            {/if}
            <iframe
                title="Spotify playlist"
                style="border-radius:12px"
                src="https://open.spotify.com/embed/track/{spotifySong}?utm_source=generator"
                width="300"
                height="200"
                frameBorder="0"
                allowfullscreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        {/if}
</Each>
<Each name="Description" field={editor}>
    <textarea class="description"></textarea>
</Each>
<button>Generate</button>
</div>

<style scoped>
    .smblnparts-message {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    textarea.description {
        min-width: 350px;
        min-height: 100px;
        max-width: 350px;
        max-height: 100px;
        font-family: 'Space Grotesk';
        font-size: medium;
    }
</style>
