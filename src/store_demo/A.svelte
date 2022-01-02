<script>
    import {appGlobal, a} from "./store";
</script>

<div>
    <h1>Parent Component Store value of A: {$appGlobal}</h1>
    <input bind:value={$a}/>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>