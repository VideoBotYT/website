<script>
    import WakatimeStats from "./WakaTime.svelte";
</script>

<article class="border round center">
    <h4>Stats</h4>
    <WakatimeStats/>
</article>

<style>
    @media screen and (min-width: 1080px){
        h6{
            font-size: 1.5rem;
        }
        h4{
            font-size: 2.5rem;
        }
        article{
            font-size: 1rem;
        }
        img{
            display: inline-block;
        }
    }
    @media screen and (max-width: 1080px){
        img{
            display: none;
        }
    }

    @media screen and (min-width: 861px) and (max-width: 1080px){
        h4{
            font-size: 1.5rem;
        }
        h6{
            font-size: 0.95rem;
        }
        article{
            font-size: 0.75rem;
        }
    }
    @media screen and (max-width: 860px){
        h4{
            font-size: 0.9rem;
        }
        h6{
            font-size: 0.8rem;
        }
        article{
            font-size: 0.6rem;
        }
    }
</style>
