<script>
    import './styles.css';
</script>

<div class="skills">
    <h1>Skills</h1>

    <div class="skill-section">
        <h2>Languages</h2>
        <div class="skill-tags">
            <span class="skill">JavaScript</span>
            <span class="skill">TypeScript</span>
            <span class="skill">Python</span>
            <span class="skill">Java</span>
            <span class="skill">HTML / CSS</span>
            <span class="skill">SQL</span>
        </div>
    </div>

    <div class="skill-section">
        <h2>Frameworks & Libraries</h2>
        <div class="skill-tags">
            <span class="skill">Svelte / SvelteKit</span>
            <span class="skill">React</span>
            <span class="skill">Node.js</span>
            <span class="skill">Express</span>
        </div>
    </div>

    <div class="skill-section">
        <h2>Tools & Platforms</h2>
        <div class="skill-tags">
            <span class="skill">Git</span>
            <span class="skill">Docker</span>
            <span class="skill">Linux</span>
            <span class="skill">Vercel</span>
            <span class="skill">VS Code</span>
        </div>
    </div>
</div>

<style>
    .skills {
        padding: 1rem;
    }

    .skills h1 {
        font-size: 2.4rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #222;
    }

    .skill-section {
        margin-bottom: 1.5rem;
    }

    .skill-section h2 {
        font-size: 1.6rem;
        font-weight: 600;
        color: #444;
        margin: 0 0 0.8rem 0;
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }

    .skill {
        font-size: 1.3rem;
        padding: 0.4rem 1rem;
        background: #f0f0f0;
        color: #333;
        border-radius: 2rem;
        border: 1px solid #ddd;
        font-weight: 500;
    }
</style>
