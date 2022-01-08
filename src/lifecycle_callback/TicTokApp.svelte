<script>
    import {fly} from "svelte/transition";

    import TicTok from "./TicTok.svelte";
    import TicTok2 from "./TicTok2.svelte";

    let visible = false;
</script>

<div>
    <label>
        <input type="checkbox" bind:checked={visible}>
        Show
    </label>
    {#if visible}
        <TicTok/>
<!--        <TicTok2 transition:fly={{y:100}}/>-->
        <TicTok2/>
    {/if}
</div>