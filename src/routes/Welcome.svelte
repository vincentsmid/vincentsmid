<script>
    import { onMount } from 'svelte';

    let showLine1 = $state(false);
    let showLine2 = $state(false);
    let showContent = $state(false);

    onMount(() => {
        showLine1 = true;
        setTimeout(() => { showLine2 = true; }, 1800);
        setTimeout(() => { showContent = true; }, 3400);
    });
</script>

<div class="terminal">
    {#if showLine1}
        <p class="line">
            <span class="prompt">&gt;</span>
            <span class="typing typing-1">Welcome to VincentOS v1.0</span>
        </p>
    {/if}
    {#if showLine2}
        <p class="line">
            <span class="prompt">&gt;</span>
            <span class="typing typing-2">Software Developer | Problem Solver</span>
        </p>
    {/if}
    {#if showContent}
        <div class="intro">
            <p>Hi there! I'm <strong>Vincent Smid</strong>.</p>
            <p>Explore my desktop to learn more about me. Try opening the apps in the taskbar below.</p>
        </div>
    {/if}
</div>

<style>
    .terminal {
        font-family: 'Courier New', Courier, monospace;
        padding: 1.5rem;
        min-height: 20rem;
    }

    .line {
        font-size: 1.8rem;
        margin: 0.6rem 0;
        display: flex;
        gap: 0.8rem;
        color: #333;
    }

    .prompt {
        color: #27c93f;
        font-weight: bold;
    }

    .typing {
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid #333;
        animation-fill-mode: forwards;
    }

    .typing-1 {
        width: 0;
        animation: typing 1.5s steps(25) 0s forwards, blink 0.6s step-end 3 forwards, hide-caret 0s 1.7s forwards;
    }

    .typing-2 {
        width: 0;
        animation: typing 1.3s steps(35) 0s forwards, blink 0.6s step-end 3 forwards, hide-caret 0s 1.5s forwards;
    }

    @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
    }

    @keyframes blink {
        50% { border-color: transparent; }
    }

    @keyframes hide-caret {
        to { border-color: transparent; }
    }

    .intro {
        margin-top: 2rem;
        font-family: var(--font-body);
        animation: fadeIn 0.8s ease-in;
    }

    .intro p {
        font-size: 1.6rem;
        color: #444;
        margin: 0.5rem 0;
    }

    .intro strong {
        color: #222;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(1rem); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
