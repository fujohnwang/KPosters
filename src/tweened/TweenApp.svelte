<script>
    import {tweened} from 'svelte/motion';
    import {cubicInOut} from 'svelte/easing';

    let value = tweened(0, {
        duration: 5000,
        easing: cubicInOut
    })

    function resetTween() {
        if ($value == 0) {
            $value = 1000
        } else {
            $value = 0
        }
    }
</script>

<main>
    <div>
        <span>{$value}</span>
    </div>
    <div>
        <progress value={$value / 1000}></progress>
    </div>
    <div>
        <button on:click={resetTween}>Reset Tweened</button>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    span {
        font-size: 111px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>