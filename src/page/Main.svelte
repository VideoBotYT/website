<script>
    import About from "../components/About.svelte";
    import Stats from "../components/Stats.svelte";
</script>

<div style="display:flex; justify-content:center; flex-direction: column;" class="responsive">
    <article class="border round center top">
        <h4 class="center-align">About me</h4>
        <p class="center-align">
            Hi, I'm VideoBot. I'm a programmer and mainly creates mods. My first ever project that brought me into coding was a Friday Night Funkin engine,
            it was terrible at the time so don't ever download 0.1.0 of <a href="https://solarengine.net">Solar Engine</a> <em>also known as Universe Engine.</em>
        </p>
    </article>

    <About/>
    <Stats/>
</div>

<style>
    article{
        width: 60%;
        /*margin: auto;*/
    }
    p{
        line-height: 1.6rem;
    }
    a{
        text-decoration: underline;
        font-weight: bold;
    }
</style>
