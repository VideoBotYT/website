<script lang="js">
    let { image = "", title= "", description = "", projectLink = "" } = $props();
</script>

<main class="project">
    <image class="projectImage" src="/images/projects/{image}.png" alt={image}/>
    <hr>
    <h1>{title}</h1>
    <p>{description}</p>
    <a href={projectLink}>Linkie</a>
</main>

<style>
    .project{
        display:flex;
        width: 30%;
        margin:auto;
        margin-top: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 4px var(--projectRuleColor);
        border-radius: 32px;
        padding:1rem;
        
        background-color: var(--projectColor);
        
        .projectImage{
            width: 100px;
        }
        
        hr{
            width:100%;
            /*height: 0.5em;*/
            /*border-radius: 8px;*/
            border: solid 2px var(--projectRuleColor);
            /*background-color: var(--projectRuleBackColor);*/
        }
        a{
            color: var(--projectLinkColor);
            font-weight: bold;
        }
    }
    
    @media (max-width: 768px) {
        .project {
            width: 80%;
        }
    }
</style>