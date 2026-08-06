<script>
    // code by DaveBerry
    import { onMount } from "svelte";

    const url =
        "https://wakatime.com/share/@VideoBot/78c9f6a7-0e92-42ce-bfd7-f0c243d05486.json";
    const ignoredLanguages = [
        "Other",
        "Text",
        "TOML",
        "git ignore",
        "GitIgnore file",
        "Shell Script",
        "Properties",
        "Ezhil",
        "textmate",
        "Perl",
        "Powershell",
        "Image",
        "Image (jpeg)",
        "Image (png)",
        "Bash",
        "RPMSpec",
        "Git Config",
        "go mod",
        "Desktop file",
        "Image (svg)",
        "TSConfig",
        "CSV",
        "INI",
        "conf",
        "Java Properties",
        "TableGen",
        "Apache Config",
        "CMake",
        "systemd",
        "Checksums",
    ];

    let loading = true;
    let error = false;
    let errMSG = null;
    let wakatimeData = null;
    let increment = 0;

    async function main() {
        try {
            const request = await fetch(url);
            const result = await request.json();

            const topLanguages = result.data
                .map((lang) => ({
                    name: lang.name,
                    text: lang.text,
                    color: lang.color,
                    percentage: lang.percent,
                }))
                .filter((lang) => !ignoredLanguages.includes(lang.name));

            wakatimeData = topLanguages;
        } catch (err) {
            loading = false;
            error = true;
            return (errMSG = err.message);
        } finally {
            loading = false;
        }
    }

    onMount(async () => {
        main();
    });
</script>

<div>
    <div class="percentageRow">
        {#each wakatimeData as lang}
            <div
                class="percentage"
                style="background-color: {lang.color}; width: {lang.percentage +
                0.25}%;"
            ></div>
        {/each}
    </div>

    <div class="grid">
        {#if loading}
            <span>Loading...</span>
        {:else if error && errMSG}
            <span style="color: red;">Error: {errMSG}</span>
        {:else if wakatimeData}
            {#each wakatimeData as wdGASTER}
                <article
                    class="round s4"
                    style="color: {wdGASTER.color};"
                >
                    <span>{wdGASTER.name}: {wdGASTER.text}</span>
                </article>
            {/each}
        {/if}
    </div>
</div>

<style>
    .percentageRow {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 0;
        margin-bottom: 5px;
    
        .percentage {
            height: 10px;
        }
    }
</style>
