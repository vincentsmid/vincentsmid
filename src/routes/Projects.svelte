<script>
    import './styles.css';
</script>

<div class="projects">
    <h1>Projects</h1>

    <div class="project-grid">
        <div class="project-card">
            <h2>VincentOS Portfolio</h2>
            <p>A personal portfolio website disguised as a desktop operating system, complete with draggable windows and a taskbar.</p>
            <div class="tags">
                <span class="tag">SvelteKit</span>
                <span class="tag">Svelte 5</span>
                <span class="tag">CSS</span>
            </div>
        </div>

        <div class="project-card">
            <h2>Project Two</h2>
            <p>Description of your second project. Replace this with your real project details, goals, and outcomes.</p>
            <div class="tags">
                <span class="tag">TypeScript</span>
                <span class="tag">Node.js</span>
            </div>
        </div>

        <div class="project-card">
            <h2>Project Three</h2>
            <p>Description of your third project. Showcase what you built, what problems it solves, and what you learned.</p>
            <div class="tags">
                <span class="tag">Python</span>
                <span class="tag">REST API</span>
            </div>
        </div>
    </div>
</div>

<style>
    .projects {
        padding: 1rem;
    }

    .projects h1 {
        font-size: 2.4rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #222;
    }

    .project-grid {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .project-card {
        background: #f8f8f8;
        border-radius: 0.6rem;
        padding: 1.4rem;
        border: 1px solid #e8e8e8;
        transition: box-shadow 0.2s;
    }

    .project-card:hover {
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
    }

    .project-card h2 {
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0 0 0.6rem 0;
        color: #333;
    }

    .project-card p {
        font-size: 1.4rem;
        color: #555;
        margin: 0 0 1rem 0;
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tag {
        font-size: 1.1rem;
        padding: 0.2rem 0.7rem;
        background: #e0f0ff;
        color: #4A5699;
        border-radius: 0.4rem;
        font-weight: 500;
    }
</style>
