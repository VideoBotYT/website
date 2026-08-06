<script>
    const projects = [
        { name: "Solar Engine", url: "https://solarengine.net", description: "Friday Night Funkin modding engine", image: "https://solarengine.net/_app/immutable/assets/favicon.Dn-ZpcBn.ico" },
        { name: "Shifted Chronicles", url: "https://fridaynightfunking.fandom.com/wiki/D%26B_SHIFTED_CHRONICLES", description: "A Friday Night Funkin Dave and Bambi mod", image: "images/projects/Shifted_Chronicles.png" },
        { name: "Spook's Creativity", url: "https://gamebanana.com/mods/561933", description: "An FNF mod unofficially continuing An Ammar's Creativity", image: "images/projects/Spook.png" },
        { name: "Kyanite", url: "", description: "An FNF mod inspired by the VS Retrospecter mod", image: "images/projects/Kyanite.png" },
    ]
</script>

<main class="responsive">
    <div class="header">
        <h4>Projects I work on</h4>
    </div>
    <hr/>
    <div class="projects">
        {#each projects as project}
            <a href={project.url} class="round">
                <article class="round">
                    <h4>{project.name}</h4>
                    <img src={project.image} alt={project.name}/>
                    <hr/>
                    <span>{project.description}</span>
                </article>
            </a>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .header{
        text-align: center;
    }

    .projects{
        display:flex;
        justify-content:center;
        flex-direction: column;
        gap: 16px;

        article{
            width: fit-content;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img{
                width: 256px;
                height: 256px;
            }
        }
    }
</style>
