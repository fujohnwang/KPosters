<script>
    import {setContext, getContext} from "svelte";
    let parent = getContext("TOP");

    let a = 'a';
    setContext("A", a)
</script>

<div>
    <h1>Parent Component of A: {parent}</h1>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
        margin: 1rem;
    }
</style>