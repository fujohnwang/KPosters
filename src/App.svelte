<script>
    import {authenticated} from "./auth";

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
                            <path id="User" class="cls-1" d="M190,1243a22,22,0,1,0,22,22A22.025,22.025,0,0,0,190,1243Zm-19,22a19,19,0,1,1,33.934,11.72,19.225,19.225,0,0,0-9.488-7.39,9.513,9.513,0,0,0,2.554-6.58c0-4.96-3.589-9-8-9s-8,4.04-8,9a9.469,9.469,0,0,0,2.755,6.78,17.812,17.812,0,0,0-9.3,7.69A18.947,18.947,0,0,1,171,1265Zm19.5,3.5c-0.549,0-1.094.04-1.636,0.09-2.213-.61-3.864-2.99-3.864-5.84,0-3.31,2.239-6,5-6s5,2.69,5,6a5.935,5.935,0,0,1-3.677,5.79C191.049,1268.52,190.777,1268.5,190.5,1268.5Zm-12.816,10.95a14.628,14.628,0,0,1,11.032-7.82,7.77,7.77,0,0,0,1.284.12,6.978,6.978,0,0,0,1.655-.19c4.848,0.46,8.991,3.79,11.18,7.42A18.93,18.93,0,0,1,177.684,1279.45Z" transform="translate(-168 -1243)"/>
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
                    <label class="mb-3 mt-6 text-gray-400" for="namer">Enter Poster Content</label>
                    <textarea id="content" name="content" class="p-2 text-2xl w-full text-black border resize-none" placeholder="enter content here" ></textarea>
<!--                    bind:value="{content}" bind:this="{contentNode}" use:adjustHeight-->

                    <label class="mb-3 mt-6 text-gray-400" for="namer">Enter Footer Message</label>
                    <textarea rows="1" class="p-2 w-full text-black border resize-none" placeholder="signature or any footer message" id="namer" name="namer" ></textarea>
<!--                    bind:value="{$footerMessage}"-->
                </div>
            </div>

            <div class="flex justify-center space-x-4 mt-3 w-full">
                <button class="w-full inline-flex items-center justify-center p-2 font-black bg-indigo-100">
                    <span> Generate Poster </span>
                </button>
            </div>
        </div>

        <div class="md:w-1/2 w-full object-cover object-center rounded mt-6">
            <div class="relative">
                <div class="w-full object-cover mx-auto max-w-md">
                    <div id="posterContainer">
                        <div class="shadow-lg mx-auto relative max-w-md group cursor-pointer">
                            <div class="absolute ml-4 pr-8 z-10">
                                <div class="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">poster.keevol.cn</div>
                            </div>

                            <div class="overflow-hidden upload-btn-wrapper">
                                <img class="transform hover:scale-110 duration-200" src="https://picsum.photos/480/480" alt="" width="480" height="480" loading="lazy" />
                                <!-- <input type="file" name="insetChooser" bind:files> -->
                            </div>
                            <div class="p-6 my-auto bg-white">
                                <p class="text-4xl text-black whitespace-pre-wrap">{"content"}</p>
                            </div>
                            <div class="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest group-hover:text-gray-600 bg-gray-50">
                                <span class="text-xl font-semibold text-gray-500 mt-4">{"footerMessage"}</span>
                                <br />
                                <span class="text-sm font-semibold text-gray-500 mt-4"> {"today"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


