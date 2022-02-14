<link rel="stylesheet" href="./header.mcss">

<header>
    <nav>
        <ul>
            <li data-active="{$page.url.pathname === "/"}">
                <a href="/"><img src="/logo.svg" alt="Home"></a>
            </li>
            <li data-active="{$page.url.pathname.startsWith("/tools/")}">
                <a href="/tools/">Tools</a>
            </li>
            <li data-active="{$page.url.pathname === "/about/"}">
                <a href="/about/">About</a>
            </li>
            <li class="{css.github}">
                <a href="https://github.com/mycolab" alt>
                    <img src="/github.svg" alt="View on GitHub" />
                </a>
            </li>
        </ul>
    </nav>
</header>

<script>
import { page } from "$app/stores";
</script>