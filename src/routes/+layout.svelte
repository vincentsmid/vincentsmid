<script>
  import './styles.css';
  import Background from "./Background.svelte";

  let { children } = $props();
</script>

<div class="app">
    <main>
        {@render children()}
    </main>
    <Background/>
</div>

<div class="mobile-notice">
    <h1>VincentOS</h1>
    <p>This portfolio is best experienced on a desktop browser. Please resize your window or visit on a larger screen.</p>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
</style>
