<link rel="stylesheet" href="$lib/styles/layout.mcss">

<Header />

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="{css.content}">
    <slot />
</main>

<footer>
    <img class="{css.logo}" src="/logo.svg" alt="Home">
</footer>

<script>
import Header from "$lib/components/header/header.svelte";
import { page } from "$app/stores";
import t from "$lib/stores/translate.js";

// given a path, mangle to usable namespaced title id (/tools/page/ => tools.page.title)
$: titleId = `${$page.url.pathname
    // trim off ends of path (/hi/ => hi)
    .slice(1, -1)
    // replace any separators with periods tools/some/page => tools.some.page
    .replaceAll("/", ".")}.title`;

$: hasTitle = titleId !== ".title";

// craft a title for most pages, can be override with direct <title> usage
$: title = `${hasTitle ? `${$t(titleId, "")} | ` : ""}${$t("title")}`;
</script>