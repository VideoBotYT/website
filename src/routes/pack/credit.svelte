<script lang="js">
    let {name= "", title= "", round = 0, link = ""} = $props();
</script>

<main>
    <a href={link}>
        <div class="credit">
            <img class="creditImage" src="/images/credits/{name}.png" alt="{name}" style="border-radius: {round}%;"/>
            <h1>{name}</h1>
            <h2>{title}</h2>
        </div>
    </a>
</main>

<style>
    main {
        width: fit-content;
        margin: auto;
    }
    
    a {
        color: white;
        text-decoration: none;
    }
    
    .credit{
        display:flex;
        background-color: var(--projectColor);
        margin:auto;
        margin-top:1rem;
        border-radius: 32px;
        border: solid 4px var(--projectRuleColor);
        
        padding:1rem;
        
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        box-shadow: rgba(0, 0, 0, 0.6) 4px 4px 10px;
        
        .creditImage{
            width:100px;
        }
    }
</style>