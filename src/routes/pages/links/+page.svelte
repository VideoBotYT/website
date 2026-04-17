<script lang="js">
    import Topbar from "../../pack/topbar.svelte";
    
    const page = "links";
</script>

<main>
    <section class="topbar"><Topbar page={page}/></section>
    <div class="mainContent">
        <div class="button">
            <a href="https://youtube.com/@videobot2009">YouTube</a>
        </div>
        <div class="button">
            <a href="https://github.com/VideoBotYT">Github</a>
        </div>
    </div>
</main>

<style>
    .mainContent{
        background-color: var(--mainColor);
        width: 30%;
        border-radius:32px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding:1rem;
        text-align: center;
    }
    
    .button{
        background-color: var(--linkColor);
        padding:1rem;
        margin: auto;
        margin-top:1rem;
        margin-bottom:1rem;
        border-radius:16px;
        box-shadow: rgba(0, 0, 0, 0.6) 4px 4px 10px;
        
        font-size:1.2rem;
        
        a{
            color:white;
            /*text-decoration: none;*/
        }
    }
</style>