// import App from './TweenApp.svelte';
// import App from './router/App.svelte';   // import different top entry component to `npm run dev` for different demo.

import App from "./posters_selector/App.svelte";

const app = new App({
	target: document.body,
	props: {
		// name: 'world'
	}
});

export default app;
