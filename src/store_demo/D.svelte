<script>
    import {appGlobal, a, b, c} from "./store";
</script>

<div>
    <h1>Parent Components Of D Component: {$appGlobal} - {$b}</h1>
    <p>has content from A component? {$a}</p>
    <p>has content from C component? {$c}</p>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>