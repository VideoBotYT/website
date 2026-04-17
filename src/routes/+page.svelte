<script lang="js">
    import Topbar from "./pack/topbar.svelte";
    import VB from "$lib/assets/VideoBot.png";
    
    const page = "home";
</script>

<main>
    <section class="topbar"><Topbar page={page}/></section>
    <div class="mainContent">
        <h1>Hi there!</h1>
        <p>This website you'll know more about me!</p>
        <img class="me" src="{VB}" alt="Spinning Idiot"/>
    </div>
</main>

<style>
    .mainContent{
        background-color: var(--mainColor);
        width: 50%;
        border-radius:32px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding:1rem;
        text-align: center;
        .me{
            width: 100px;
            border-radius: 100%;
            
            animation: spin 5s linear infinite;
        }
    }
    
    @keyframes spin{
        0%{
            rotate: 0deg;
        }
        50%{
            rotate: 180deg;
        }
        100%{
            rotate:360deg;
        }
    }
</style>