<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>


<button class="w-full inline-flex items-center justify-center p-2 font-black bg-indigo-100"
        on:click="{()=> dispatch('gen', 'any data you would like to pass')}">
    <span> Generate Poster </span>
</button>