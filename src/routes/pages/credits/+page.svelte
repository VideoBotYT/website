<script lang="js">
    import Topbar from "../../pack/topbar.svelte";
    import Credit from "../../pack/credit.svelte";

    const page = "credits";
</script>

<main>
    <section class="topbar"><Topbar page={page}/></section>
    <Credit name="VideoBot" title="Creator" round={100} />
    <Credit
        name="Daveberry"
        title="Helping and mobile fixing"
        link="https://codedave.pages.dev"
    />
</main>

<style>
    .mainContent {
        background-color: var(--mainColor);
        width: 50%;
        border-radius: 32px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding: 1rem;
        text-align: center;
    }
</style>
