// import App from './App.svelte';
import App from './store_demo/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;