<script lang="js">
    import Topbar from "../../pack/topbar.svelte";
    
    const page = "about";
</script>

<main>
    <section class="topbar"><Topbar page={page}/></section>
    <div class="mainContent">
        <h1>Hi, I'm VideoBot</h1>
        <p>I'm an idiot who loves programming, gaming and modcharting.</p>
        <p>I call myself an idiot because you can never take me serious. At least, I <strong>try</strong> to makes jokes whenever I want. Even in moments when you shouldn't makes jokes.</p>
    </div>
</main>

<style>
    .mainContent{
        background-color: var(--mainColor);
        width: 75%;
        border-radius:32px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding:1rem;
        text-align: center;
    }
</style>