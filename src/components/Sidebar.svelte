<script lang="ts">
    // time script (totally not joinked from Dave's website)
    import { onMount } from "svelte";
    import { link, router } from 'svelte-spa-router'

    const pages = [
      { page: 'Home', url: '/', icon: 'home' },
      { page: 'Projects', url: '/projects', icon: 'build' },
      { page: 'Links', url: '/links', icon: 'link' },
      { page: 'Credits', url: '/credits', icon: 'diversity_3' },
    ]
    let currentPage = $derived(router.location)

    const timeZone = "Europe/Brussels";
    let currentTime = $state("???");

    function getCurrentTime() {
        return new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: timeZone,
        });
    }

    function updateTime() {
        currentTime = getCurrentTime();
    }

    onMount(function () {
        updateTime();

        let intervalId = setInterval(function () {
            updateTime();
        }, 1000);

        return function () {
            clearInterval(intervalId);
        };
    });
</script>

<nav class="left sidetrack">
    <div class="header">
        <div class="shape sided-cookie6 medium rotate">
            <img src="/images/VideoBot.png" alt="VideoBot" class="responsive" />
        </div>
        <p>Local Time: <span>{currentTime}</span></p>
        <a href="https://wakatime.com/@0189a5c6-0eef-495b-8bad-e462ab0a4b4a">
            <img src="https://wakatime.com/badge/user/0189a5c6-0eef-495b-8bad-e462ab0a4b4a.svg"
                alt="Total time coded since Apr 28 2025" />
        </a>
    </div>

    <div class="nav">
        {#each pages as page}
            <a
                href={page.url}
                use:link
                class:active={currentPage === page.url}
            >
                <i>{page.icon}</i>
                <div>{page.page}</div>
            </a>
        {/each}
    </div>
</nav>

<style>
    .sidetrack{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-right: solid #37353D 2px;
        padding: 1rem;
        min-width: 12rem;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
