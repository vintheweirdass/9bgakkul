<script lang="ts">
    import type { FocusEventHandler, MouseEventHandler } from "svelte/elements";
    import Icon from "./Icon.svelte";
    // type BtnEvent = MouseEventHandler<HTMLButtonElement>|null|undefined;
    // type InputEvent = FocusEventHandler<HTMLInputElement>|null|undefined;
    let { value = $bindable() }: { value: string } = $props();
</script>

<div class="smblnparts-search">
    <Icon name="search-line" />
    <input placeholder="Search.." bind:value />
</div>

<style scoped>
    .smblnparts-search {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding: 10px;
        border-radius: 10px;
        background-color: var(--color-theme-1);
        column-gap: 10px;
        margin: 10px;
    }
    .smblnparts-search > input {
        border: none;
        border-radius: 10px;
        background-color: rgb(209, 218, 224);
        color: black;
        padding: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 300px;
    }
    @media only screen and (max-width: 600px) {
        .smblnparts-search {
            margin: none;
            align-self: auto;
        }
        .smblnparts-search > input {
            width: 60vw;
        }
    }
</style>
