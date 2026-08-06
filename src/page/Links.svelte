<script>
    const links = [
        { name: "YouTube", url: "https://youtube.com/@videobot2009", image: "https://www.youtube.com/s/desktop/c9bb4632/img/favicon.ico" },
        { name: "GitHub", url: "https://github.com/VideoBotYT", image: "https://github.githubassets.com/favicons/favicon-dark.png" },
        { name: "Bluesky", url: "https://bsky.app/profile/videobot.bsky.social", image: "https://web-cdn.bsky.app/static/favicon-16x16.png" },
    ]
</script>

<main class="responsive">
    <div class="links">
        {#each links as link}
            <a href={link.url} class="round">
                <article class="round">
                    <img src={link.image} alt={link.name}/>
                    <h4>{link.name}</h4>
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

    .links{
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        gap: 16px;

        article{
            width: fit-content;
            display: flex;
            flex-direction: row;
            gap: 8px;
            justify-content: center;
            align-items: center;

            img{
                width: 32px;
                height: 32px;
            }
        }
    }
</style>
