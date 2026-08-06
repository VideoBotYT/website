<script>
    const nonExistendSkills = [
        {
            group: "Languages",
            skills: [
                { name: "Haxe", icon: "haxe", state: "blue" },
                { name: "Lua", icon: "lua", state: "yellow" },
                { name: "Java", icon: "java", state: "red" },
            ],
        },
        {
            group: "Frontend frameworks & UI Components",
            skills: [
                { name: "Svelte", icon: "svelte", state: "blue" },
                { name: "BeerCSS", icon: "https://www.beercss.com/favicon.png", state: "blue" },
                { name: "HaxeUI", icon: "https://www.haxeui.org/favicon.png", state: "blue" }
            ]
        },
        {
            group: "Backend & tools",
            skills: [
                { name: "SvelteKit", icon: "svelte", state: "blue" },
                { name: "HaxeFlixel", icon: "haxeflixel", state: "blue" }
            ]
        }
    ];

    function isExternalIcon(icon) {
        if (!icon.includes("https"))
            return `https://skillicons.dev/icons?i=${icon}`;
        return icon;
    }

    function getIconState(icon) {
        switch (icon) {
            case "blue":
                return "#008BFF";
            case "yellow":
                return "#FFFF00";
            case "red":
                return "#FF0000";
            default:
                return "#008BFF";
        }
    }
</script>

<article class="border round center">
    <h4>Languages</h4>
    <p class="mediumText">Tap/Hover Information:</p>
    <p style="color: #008BFF;"><b>Blue</b> - Prefers this language, and codes in it.</p>
    <p style="color: #FFFF00;"><b>Yellow</b> - Codes in this language, but doesn't mainly code in it.</p>
    <p style="color: #FF0000;"><b>Red</b> - Learning on this language.</p>

    <div>
        {#each nonExistendSkills as skill}
            <h6>{skill.group}</h6>
            <div class="grid">
                {#each skill.skills as skilly}
                    <article class="chip s2" style="background-color:{getIconState(skilly.state)};">
                        <img src={isExternalIcon(skilly.icon)} alt={skilly.name}/>
                        <span>{skilly.name}</span>
                    </article>
                {/each}
            </div>
        {/each}
    </div>
</article>
