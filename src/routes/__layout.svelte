<link rel="stylesheet" href="./_layout.mcss">

<Header />

<main>
    <slot />
</main>

<footer>
    <img class="{css.logo}" src="/logo.svg" alt="Home">
</footer>

<script>
import Header from "$lib/header/header.svelte";
</script>