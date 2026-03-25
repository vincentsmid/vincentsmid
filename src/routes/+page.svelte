<script>
    import './styles.css';
    import { onMount } from 'svelte';
    import TaskBar from './TaskBar.svelte';
    import WindowManager from './WindowManager.svelte';
    import MobileLayout from './MobileLayout.svelte';

    let isMobile = $state(false);
    let ready = $state(false);

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
    }

    onMount(() => {
        checkMobile();
        ready = true;
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    });
</script>

{#if ready}
    {#if isMobile}
        <MobileLayout />
    {:else}
        <section class="desktop">
            <WindowManager />
            <TaskBar />
        </section>
    {/if}
{/if}

<style>
    .desktop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.4;
    }
</style>
