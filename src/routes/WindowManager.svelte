<script>
    import { windows, closeWindow, bringToFront, minimizeWindow, toggleMaximized, updateWindowPosition } from './store.js';
    import { fly } from 'svelte/transition';

    /** @param {MouseEvent} event @param {import('./store.js').WindowState} win */
    function startDrag(event, win) {
        if (win.maximized) return;
        event.preventDefault();

        bringToFront(win.id);

        const offsetX = win.x - event.clientX;
        const offsetY = win.y - event.clientY;

        /** @param {MouseEvent} e */
        function onMouseMove(e) {
            updateWindowPosition(win.id, e.clientX + offsetX, e.clientY + offsetY);
        }

        function onMouseUp() {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
</script>

{#each $windows as win (win.id)}
    {#if !win.minimized}
        <div
            class="window-wrapper"
            style="left: {win.x}px; top: {win.y}px; z-index: {win.zIndex};"
            in:fly={{ y: -200, duration: 300 }}
            out:fly={{ y: 200, duration: 300 }}
        >
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="window"
                class:maximized={win.maximized}
                style="width: {win.width}; height: {win.height};"
                onmousedown={() => bringToFront(win.id)}
            >
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    class="title-bar"
                    onmousedown={(e) => startDrag(e, win)}
                >
                    <div class="button-box">
                        <button class="btn btn-close" onclick={() => closeWindow(win.id)} aria-label="Close"></button>
                        <button class="btn btn-minimize" onclick={() => minimizeWindow(win.id)} aria-label="Minimize"></button>
                        <button class="btn btn-maximize" onclick={() => toggleMaximized(win.id)} aria-label="Maximize"></button>
                    </div>
                    <span class="title-text">{win.content.title}</span>
                    <div class="title-spacer"></div>
                </div>
                <div class="window-content" style="height: calc({win.maximized ? '100vh' : win.height} - 3rem);">
                    <win.content.body />
                </div>
            </div>
        </div>
    {/if}
{/each}

<style>
    @import 'styles.css';

    .window-wrapper {
        position: absolute;
    }

    .window {
        background-color: var(--color-theme-2);
        border-radius: 0.8rem;
        box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }

    .window.maximized {
        width: 100vw !important;
        height: 100vh !important;
        border-radius: 0;
        box-shadow: none;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 1000;
    }

    .title-bar {
        display: flex;
        align-items: center;
        background-color: var(--color-theme-1);
        height: 3rem;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        user-select: none;
        cursor: grab;
        padding: 0 1rem;
    }

    .maximized .title-bar {
        border-radius: 0;
        cursor: default;
    }

    .title-text {
        color: var(--color-theme-3);
        font-size: 1.3rem;
        font-weight: 600;
        flex: 1;
        text-align: center;
    }

    .title-spacer {
        width: 5.4rem;
    }

    .button-box {
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    .btn {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: opacity 0.2s;
    }

    .btn:hover {
        opacity: 0.75;
    }

    .btn-close {
        background-color: #ff5f57;
    }

    .btn-minimize {
        background-color: #ffbd2e;
    }

    .btn-maximize {
        background-color: #27c93f;
    }

    .window-content {
        padding: 1rem;
        overflow: auto;
    }
</style>
