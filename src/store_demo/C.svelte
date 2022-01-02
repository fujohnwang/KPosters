<script>
    import {appGlobal, a, b, c} from "./store";
</script>

<div>
    <h1>Parent Components Of C Component: {$appGlobal} - {$b}</h1>
    <p>store value of A component? {$a}</p>
    <input bind:value={$c}/>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>