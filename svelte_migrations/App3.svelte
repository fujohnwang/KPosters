<script>
    import {onMount} from 'svelte';

    let increaseCounter = 0;
    let decreaseCounter = Number.MAX_SAFE_INTEGER;
    // let content = "";

    let numbers = [];

    onMount(async () => {
        const interval = setInterval(() => {
            increaseCounter++;
            decreaseCounter--;
            numbers = [...numbers, increaseCounter, decreaseCounter];
        }, 1000);

        return () => clearInterval(interval);
    });

    $: {
        console.log(content)
    }
    $: content = `increaseCounter=${increaseCounter}, decreaseCounter=${decreaseCounter}`;

</script>

<main>
    <p>{content}</p>
    <h1>{increaseCounter}</h1>
    <h1>{decreaseCounter}</h1>
    <p>{numbers}</p>
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