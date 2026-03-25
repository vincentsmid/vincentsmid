<script>
    import './styles.css';
    import Welcome from './Welcome.svelte';
    import AboutMe from './AboutMe.svelte';
    import Projects from './Projects.svelte';
    import Skills from './Skills.svelte';
    import Contact from './Contact.svelte';

    const pages = [
        { title: 'Welcome', component: Welcome },
        { title: 'About Me', component: AboutMe },
        { title: 'Projects', component: Projects },
        { title: 'Skills', component: Skills },
        { title: 'Contact', component: Contact },
    ];

    let menuOpen = $state(false);
    let activePage = $state(pages[0]);

    /** @param {typeof pages[number]} page */
    function selectPage(page) {
        activePage = page;
        menuOpen = false;
    }
</script>

<div class="mobile-shell">
    <header class="topbar">
        <span class="topbar-title">{activePage.title}</span>
        <button class="hamburger" onclick={() => menuOpen = !menuOpen} aria-label="Menu">
            <span class="bar" class:open={menuOpen}></span>
            <span class="bar" class:open={menuOpen}></span>
            <span class="bar" class:open={menuOpen}></span>
        </button>
    </header>

    {#if menuOpen}
        <!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
        <div class="overlay" onclick={() => menuOpen = false}></div>
        <nav class="menu">
            {#each pages as page}
                <button
                    class="menu-item"
                    class:active={activePage === page}
                    onclick={() => selectPage(page)}
                >
                    {page.title}
                </button>
            {/each}
        </nav>
    {/if}

    <div class="page-content">
        <activePage.component />
    </div>
</div>

<style>
    .mobile-shell {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .topbar {
        position: sticky;
        top: 0;
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
        padding: 0 1.6rem;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(1rem);
        border-bottom: 1px solid #e0e0e0;
    }

    .topbar-title {
        font-size: 1.8rem;
        font-weight: 600;
        color: #333;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.4rem;
        width: 3.6rem;
        height: 3.6rem;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.6rem;
    }

    .bar {
        display: block;
        width: 100%;
        height: 0.25rem;
        background: #333;
        border-radius: 0.2rem;
        transition: transform 0.25s, opacity 0.25s;
        transform-origin: center;
    }

    .bar.open:nth-child(1) {
        transform: translateY(0.65rem) rotate(45deg);
    }

    .bar.open:nth-child(2) {
        opacity: 0;
    }

    .bar.open:nth-child(3) {
        transform: translateY(-0.65rem) rotate(-45deg);
    }

    .overlay {
        position: fixed;
        inset: 5rem 0 0 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 190;
    }

    .menu {
        position: fixed;
        top: 5rem;
        right: 0;
        z-index: 200;
        background: white;
        border-bottom-left-radius: 0.8rem;
        box-shadow: -0.2rem 0.4rem 1.2rem rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        min-width: 18rem;
        padding: 0.4rem 0;
    }

    .menu-item {
        display: block;
        width: 100%;
        padding: 1.2rem 2rem;
        border: none;
        background: none;
        text-align: left;
        font-size: 1.6rem;
        font-family: var(--font-body);
        color: #444;
        cursor: pointer;
        transition: background 0.15s;
    }

    .menu-item:hover {
        background: #f5f5f5;
    }

    .menu-item.active {
        font-weight: 600;
        color: #4A5699;
        background: #f0f4ff;
    }

    .page-content {
        flex: 1;
        padding: 1.6rem;
        background: rgba(255, 255, 255, 0.9);
        overflow-y: auto;
    }
</style>
