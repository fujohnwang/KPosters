<script>
    import {onDestroy} from 'svelte';
    import {appGlobal, simplestStore} from './store';

    import A from './A.svelte';
    import B from './B.svelte';

    // let tmpValue;
    // appGlobal.subscribe(value=> {
    //     tmpValue = value;
    // })
    // $: appGlobal.set(tmpValue)

    // let unsubscribe = simplestStore.subscribe(value => {
    //     tmpValue = value;
    // })
    // $: simplestStore.set(tmpValue)
    // onDestroy(unsubscribe)

</script>

<main>
    <input bind:value={$simplestStore}/>
    <A/>
    <B/>
    {$simplestStore}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>