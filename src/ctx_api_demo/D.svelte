<script>
    import {setContext, getContext, hasContext} from "svelte";
    let parent = getContext("TOP");
    let parentB = getContext("B");
    let hasA = hasContext("A");
    let hasC = hasContext("C");
</script>

<div>
    <h1>Parent Components Of D Component: {parent} - {parentB}</h1>
    <p>has content from A component? {hasA}</p>
    <p>has content from C component? {hasC}</p>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>