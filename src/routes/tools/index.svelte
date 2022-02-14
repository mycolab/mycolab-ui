<link rel="stylesheet" href="./_tools.mcss">

<h1>{$t("tools.title")}</h1>

<div class="{css.tiles}">
    {#each tools as { name, link, img }}
    <a href="{link}">
        <Tile>
            <img class="{css.img}" src="{img}" alt="{name}" />
            <h2>{name}</h2>
        </Tile>
    </a>
    {/each}
</div>

<script>
import t from "$lib/stores/translate.js";
import Tile from "$lib/components/tile/tile.svelte";

const tools = [
    {
        name : $t("tools.stt.title"),
        img  : "/sequence-to-tree.svg",
        link : "/tools/sequence-to-tree/",
    },
];
</script>