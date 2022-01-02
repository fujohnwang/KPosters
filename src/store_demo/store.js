import {writable} from "svelte/store";

export let appGlobal = writable("TOP");
export let a = writable("a");
export let b = writable("b");
export let c = writable("c");

