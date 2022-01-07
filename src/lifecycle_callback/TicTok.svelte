<script>
    import {onMount} from "svelte";

    let tic = 0;

    onMount(() => {
        console.log("set up interval onmount")
        let handle = setInterval(() => {
            tic = tic + 1;
        }, 1000)
        return () => {
            clearInterval(handle)
            console.log("interval is cleared at unmount")
        }
    })
</script>

<div>
    <span>{tic} seconds after TicTok component mounted</span>
</div>