<script>
    import { page } from '$app/stores';
</script>

<div class="error">
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</div>

<style>
    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        color: white;
        text-shadow: 0 0.1rem 0.4rem rgba(0,0,0,0.3);
    }

    h1 {
        font-size: 6rem;
        font-weight: 700;
    }

    p {
        font-size: 2rem;
    }
</style>
