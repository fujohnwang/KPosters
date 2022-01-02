<script>
    import C from './C.svelte';
    import D from './D.svelte';

    export let b;
    let c = 'c prop';
    let d = 'd prop';
</script>

<div>
    <h1>Component: {b}</h1>
    <C {c}/>
    <D {d}/>
</div>

<style>
    div {
        border: solid 1px #ff3e00;
    }
</style>