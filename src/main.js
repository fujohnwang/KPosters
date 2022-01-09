// import App from './TweenApp.svelte';
import App from './xfade/CrossfadeApp.svelte';

const app = new App({
	target: document.body,
	props: {
		// name: 'world'
	}
});

export default app;