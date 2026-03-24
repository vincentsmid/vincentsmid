<script>
    import './styles.css';
    import TaskBar from './TaskBar.svelte';
    import WindowManager from './WindowManager.svelte';
</script>

<section>
    <WindowManager />
    <TaskBar />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.4;
    }
</style>