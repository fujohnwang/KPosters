<script>

    import Svelte from './Svelte.svelte';
    import Vue from './VueJS.svelte';
    import React from './React.svelte';
    import NotFound from "./NotFound.svelte";

    import Router from 'svelte-spa-router';
    import {link} from 'svelte-spa-router';
    import {push, pop, replace} from 'svelte-spa-router'

    let routes = {
        '/': Svelte,
        '/vue': Vue,
        '/svelte': Svelte,
        '/react': React,
        '*': NotFound
    }

</script>

<svelte:head>
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.0/dist/tailwind.min.css"/>
</svelte:head>

<main>
    <div class="flex-1 flex flex-col">
        <nav class="px-4 flex justify-between bg-white h-16 border-b-2">
            <span> <!--placeholder--> </span>
            <ul class="flex items-center space-x-6">
                <!-- add button -->
                <li>
                    <a href="#/">Svelte</a>
                </li>
                <li>
                    <a href="/vue" use:link>Vue</a>
                </li>
                <li>
                    <a use:link={"/react"}>React</a>
                </li>
                <li>
                    <a href="#" on:click={()=> push("/svelte")}>Back to Svelte</a>
                </li>
                <li>
                    <!--  path must start with / with use:link  -->
                    <a href="/not_exist" use:link>Oops...</a>
                </li>
            </ul>
            <span> <!--placeholder--> </span>
        </nav>
    </div>

    <div class="flex bg-gray-100 justify-center">
        <div class="p-12 text-center max-w-2xl">
            <Router {routes}/>
        </div>
    </div>
</main>

