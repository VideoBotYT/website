<script lang="js">
    let { page = "" } = $props();

    // time script (totally not joinked from Dave's website)
    import { onMount } from "svelte";

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

<section class="main">
    <main class="topbar">
        <div class="buttons">
            <a href="/" class:active={page === "home"}>Home</a>
            <a href="/pages/about" class:active={page === "about"}>About</a>
            <a href="/pages/links" class:active={page === "links"}>Links</a>
            <a href="/pages/projects" class:active={page === "projects"}>Projects</a>
            <a href="/pages/credits" class:active={page === "credits"}>Credits</a>
        </div>
    </main>
    <p class="time">My time is currently: <span>{currentTime}</span></p>
</section>

<style>
    .main {
        background-color: var(--topbarColor);
        display:flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .topbar {
        display: flex;
        justify-content: center;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;

        align-items: center;
        overflow-x: scroll;
    }

    .buttons {
        display: flex;
        gap: 1rem;

        a {
            background-color: var(--buttonColor);
            padding: 0.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            font-size: 1.5em;

            box-shadow: rgba(0, 0, 0, 0.6) 4px 4px 10px;

            scale: 1;
            transition: scale 0.5s;
        }
        a:hover {
            scale: 1.05;
        }
        a.active {
            scale: 1.1;
        }
    }
    
    @media screen and (max-width: 768px) {
        .topbar {
            padding-left: 11rem;
            padding-right: 0.5rem;
        }
    }
</style>
