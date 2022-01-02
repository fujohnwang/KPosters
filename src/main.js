// import App from './App.svelte';
import App from './ctx_api_demo/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;