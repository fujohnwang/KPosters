<script>
    export let content = '';
    export let signature = '';
</script>

<div class="shadow-lg mx-auto relative max-w-md group cursor-pointer">
    <!--                            <div class="absolute ml-4 pr-8 z-10">-->
    <!--                                <div class="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">poster.keevol.cn</div>-->
    <!--                            </div>-->

    <div class="overflow-hidden upload-btn-wrapper">
        <img class="transform hover:scale-110 duration-200" src="https://picsum.photos/480/480"
             alt="" width="480" height="480" loading="lazy"/>
        <!-- <input type="file" name="insetChooser" bind:files> -->
    </div>
    <div class="p-6 my-auto bg-white">
        <p class="text-4xl text-black whitespace-pre-wrap">{content}</p>
    </div>
    <div class="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest group-hover:text-gray-600 bg-gray-50">
        <span class="text-xl font-semibold text-gray-500 mt-4">{signature} - t2</span>
        <br/>
        <span class="text-sm font-semibold text-gray-500 mt-4"> {new Date().toLocaleDateString()}</span>
    </div>
</div>