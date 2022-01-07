import {onDestroy, onMount} from "svelte";
import {writable} from "svelte/store";

export const tic = writable(0);

export function setUpInterval() {
    let intervalHandle;

    onMount(async () => {
        console.log("external onMount")
        intervalHandle = setInterval(() => {
            tic.update(c => c + 1)
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(intervalHandle);
        console.log("external onDestroy")
    });
}

