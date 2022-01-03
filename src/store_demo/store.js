import {writable} from "svelte/store";

export let appGlobal = writable("TOP");
export let a = writable("a");
export let b = writable("b");
export let c = writable("c");


function createStore(init) {
    let internalValue = init;
    const subscribers = [];

    const subscribe = (callback) => {
        subscribers.push(callback);
        callback(internalValue);
        return () => {
            // remove callback on unsubscribe
            subscribers.splice(subscribers.findIndex((cb) => cb === callback), 1);
        }
    }
    const set = (v) => {
        if(!(v === internalValue)) {
            internalValue = v;
            subscribers.forEach(callback => callback(internalValue))
        }
    }
    return {subscribe, set};
}

export let simplestStore = createStore("")

