<script lang="ts">
	import favicon from '$lib/assets/VideoBot.png';
	import Topbar from './pack/topbar.svelte'
	import '$lib/styles.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
    {@render children()}
</main>

<style>
    main {
        .topbar {
            overflow-x: hidden;
        }
    }
</style>