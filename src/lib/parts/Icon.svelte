<script lang="ts">
    import { type Option, width, height, getIcon } from "./types/Icon";
    const opt: Option = $props();
</script>

<svg {width} {height} color={opt.color} class={`smblnparts-icon${opt['class']?` ${opt['class']}`:''}`}>{@html getIcon(opt.name)}</svg>