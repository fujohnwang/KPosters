<script>
    import {appGlobal, a, simplestStore} from "./store";
</script>

<div>
    <h1>Parent Component Store value of A: {$appGlobal}</h1>
    <input bind:value={$a}/>
    <p>{$simplestStore}</p>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>