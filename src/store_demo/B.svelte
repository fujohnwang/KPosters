<script>
    import {appGlobal, a, b} from "./store";
    import C from "./C.svelte";
    import D from "./D.svelte";
</script>

<div>
    <h1>Parent Component Store value Of B: {$appGlobal}</h1>
    <p>store value of Component A? {$a}</p>
    <input bind:value={$b}/>
    <C/>
    <D/>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>