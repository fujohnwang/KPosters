import {onDestroy, onMount} from "svelte";
import {writable} from "svelte/store";

export const tic = writable(0);

export function setUpInterval() {
    let interval;

    onMount(async () => {
        console.log("external onMount")
        interval = setInterval(() => {
            tic.update(c => c + 1)
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
        console.log("external onDestroy")
    });
}

