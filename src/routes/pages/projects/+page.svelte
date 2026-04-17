<script lang="js">
    import Topbar from "../../pack/topbar.svelte";
    import Project from "../../pack/project.svelte";
    
    const page = "projects";
</script>

<main>
    <section class="topbar"><Topbar page={page}/></section>
    <Project image={"Solar_Engine"} title={"Solar Engine"} description={"A Base Game fork to make modding alot easier and more powerful."} projectLink={"https://solar-engine.netlify.app"}/>
    <Project image={"Shifted_Chronicles"} title={"Shifted Chronicles"} description={"An FNF Dave and Bambi mod"} projectLink={"https://fridaynightfunking.fandom.com/wiki/D%26B_SHIFTED_CHRONICLES"} />
    <Project image={"Kyanite"} title={"VS Kyanite"} description={"An FNF mod inspired by the VS Retrospecter mod"} projectLink={""}/>
    <Project image={"Spook"} title={"Spook's Creativity"} description={"An FNF mod unofficially continuing An Ammar's Creativity"} projectLink={"https://gamebanana.com/mods/561933"}/>
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
    }
</style>