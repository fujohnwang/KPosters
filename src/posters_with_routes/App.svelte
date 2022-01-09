<script>
    import {authenticated} from "../auth";
    import makeItSnow from "../makeItSnow";
    import Spinner from 'svelte-spinner';
    import showdown from 'showdown';
    import domtoimage from 'dom-to-image';
    import Router from "svelte-spa-router";
    import {push, pop, replace} from 'svelte-spa-router';
    import Template1 from './templates/Template1.svelte';
    import Template2 from './templates/Template2.svelte';
    import Template3 from './templates/Template3.svelte';
    import NF from '../router/NotFound.svelte';

    let routes = {
        '/': Template1,
        '/t1': Template1,
        '/t2': Template2,
        '/t3': Template3,
        '*' : NF
    }

    let converter = new showdown.Converter();

    let content = '';
    let signature = '';

    let posterContainerNode;
    let generatePromise;

    function generate() {
        generatePromise = doGenerate();
    }

    async function doGenerate() {
        await domtoimage.toJpeg(posterContainerNode, {quality: 0.95})
            .then(function (url) {
                let link = document.createElement('a');
                link.download = 'simple_poster_today.jpeg';
                link.href = url;
                link.click();
            });
    }

    function logAction(node, params) {
        console.log(`${node.tagName}: ${params.name} is created`)
        return {
            update(params){
                // params change
            },
            destroy() {
                // do clean up here
            }
        };
    }

</script>

<svelte:head>
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.0/dist/tailwind.min.css"/>
</svelte:head>

<!--<svelte:head>-->
<!--    &lt;!&ndash; cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI&ndash;&gt;-->
<!--    <script src="https://cdn.tailwindcss.com/"></script>-->
<!--</svelte:head>-->

<div class="container px-5 py-3 mx-auto">
    <div class="lg:w-full mx-auto px-3">
        <div class="flex flex-wrap overflow-hidden sm:-mx-2">
            <div class="w-1/2 overflow-hidden sm:my-2 sm:px-2">
                <h1 class="text-3xl font-black">Simple Poster</h1>
            </div>

            <div class="w-1/2 overflow-hidden sm:my-2 sm:px-2 text-right">
                <div class="inline-flex items-center justify-center space-x-3">
                    {#if $authenticated}
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                            <defs>
                                <style>
                                    .cls-1 {
                                        fill-rule: evenodd;
                                    }
                                </style>
                            </defs>
                            <path id="User" class="cls-1"
                                  d="M190,1243a22,22,0,1,0,22,22A22.025,22.025,0,0,0,190,1243Zm-19,22a19,19,0,1,1,33.934,11.72,19.225,19.225,0,0,0-9.488-7.39,9.513,9.513,0,0,0,2.554-6.58c0-4.96-3.589-9-8-9s-8,4.04-8,9a9.469,9.469,0,0,0,2.755,6.78,17.812,17.812,0,0,0-9.3,7.69A18.947,18.947,0,0,1,171,1265Zm19.5,3.5c-0.549,0-1.094.04-1.636,0.09-2.213-.61-3.864-2.99-3.864-5.84,0-3.31,2.239-6,5-6s5,2.69,5,6a5.935,5.935,0,0,1-3.677,5.79C191.049,1268.52,190.777,1268.5,190.5,1268.5Zm-12.816,10.95a14.628,14.628,0,0,1,11.032-7.82,7.77,7.77,0,0,0,1.284.12,6.978,6.978,0,0,0,1.655-.19c4.848,0.46,8.991,3.79,11.18,7.42A18.93,18.93,0,0,1,177.684,1279.45Z"
                                  transform="translate(-168 -1243)"/>
                        </svg>
                    {:else}
                        <span>Login</span>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <div class="lg:w-full mx-auto flex flex-wrap">
        <div class="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <!-- <div class="flex mb-4"></div> -->
            <div class="border p-3">
                <div>
                    <label class="mb-3 mt-6 text-indigo-200" for="namer">Enter Poster Content</label>
                    <textarea id="content" name="content" class="p-2 text-2xl w-full text-black border resize-none"
                              placeholder="enter content here" bind:value={content}></textarea>
                    <!--                    bind:value="{content}" bind:this="{contentNode}" use:adjustHeight-->

                    <label class="mb-3 mt-6 text-indigo-200" for="namer">Enter Footer Message</label>
                    <textarea rows="1" class="p-2 w-full text-black border resize-none"
                              placeholder="signature or any footer message"
                              id="namer" name="namer" bind:value={signature}></textarea>
                </div>
            </div>

            <div class="flex justify-center space-x-4 mt-3 w-full">
                <button class="w-full inline-flex items-center justify-center p-2 font-black bg-indigo-100"
                        on:click={generate} use:makeItSnow use:logAction={{name: 'Generate Poster'}}>
                    {#if generatePromise}
                        {#await generatePromise}
                            <Spinner/>
                        {:then value}
                            {@debug value}
                        {:catch error}
                            {@debug error}
                        {/await}
                    {/if}
                    <span> Generate Poster </span>
                </button>
            </div>

            <div class="flex justify-end space-x-3 mt-32 w-full">
                <div class="flex flex-col justify-center items-center space-x-0.5 space-y-0.5">
                    <div class="item w-full">
                        <button class="w-full inline-flex items-center justify-center p-2 font-black bg-indigo-100" on:click={()=> push('/t1')}>
                            Template 1
                        </button>
                    </div>
                    <div class="item w-full">
                        <button class="w-full inline-flex items-center justify-center p-2 font-black bg-indigo-100" on:click={()=> push('/t2')}>
                            Template 2
                        </button>
                    </div>
                    <div class="item w-full">
                        <button class="w-full inline-flex items-center justify-center p-2 font-black bg-indigo-100" on:click={()=> push('/t3')}>
                            Template 3
                        </button>
                    </div>
                </div>
            </div>


        </div>

        <div class="md:w-1/2 w-full object-cover object-center rounded mt-6">
            <div class="relative">
                <div class="w-full object-cover mx-auto max-w-md">
                    <div id="posterContainer" bind:this={posterContainerNode}>
                        <Router {routes}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


