<script>

    import {crossfade, fade} from 'svelte/transition';

    // let key = "any_identity_information"

    let switchCondition = true;

    let [send, receive] = crossfade({fallback: fade})

</script>

<svelte:head>
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.0/dist/tailwind.min.css"/>
</svelte:head>

<div class="container m-10">
    <button class="bg-blue-200 p-3 mb-3 w-full"
            on:click={()=> switchCondition = !switchCondition}>Switch</button>
    <div class="flex flex-wrap">
        <div class="w-1/2 bg-slate-300 p-6">
            {#if switchCondition}
                <div class="bg-blue-100 rounded-lg p-3 text-center" out:send>
                    Left
                </div>
            {/if}
        </div>
        <div class="w-1/2 bg-slate-300 p-6">
            {#if !switchCondition}
                <div class="bg-gray-100 rounded-lg p-3 text-center" in:receive>
                    Right
                </div>
            {/if}
        </div>
    </div>
</div>

