<script>
    import {setContext, getContext, hasContext} from "svelte";
    import C from './C.svelte';
    import D from './D.svelte';

    let parent = getContext("TOP");
    setContext("B", "b component");
    let hasA = hasContext("A");
</script>

<div>
    <h1>Parent Component Of B: {parent}</h1>
    <C/>
    <D/>
    <p>has Context from Component A? {hasA}</p>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>