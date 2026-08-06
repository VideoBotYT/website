<script lang="ts">
    import "beercss";
    import "material-dynamic-colors";

    import Sidebar from "./components/Sidebar.svelte";
    import Router, { link, router } from 'svelte-spa-router'

    import Main from "./page/Main.svelte"
    import Projects from "./page/Projects.svelte"
    import Links from "./page/Links.svelte"
    import Credits from "./page/Credits.svelte"
    import NotFound from "./page/NotFound.svelte"

    const routes = {
        '/': Main,
        '/projects': Projects,
        '/links': Links,
        '/credits': Credits,
        '*': NotFound,
    }
</script>

<Sidebar/>
<main>
    <div class="wrapper">
        <Router {routes} />
    </div>
</main>

<style>
    main {
        display: flex;
        /*margin:0;
        padding:0;*/
    }

    .wrapper {
        flex: 1;
    }
</style>