<script>
    import './styles.css';
</script>

<div class="contact">
    <h1>Contact</h1>
    <p class="subtitle">Feel free to reach out!</p>

    <div class="links">
        <a href="mailto:hello@vincentsmid.com" class="contact-link">
            <span class="icon">&#9993;</span>
            <div>
                <strong>Email</strong>
                <span>hello@vincentsmid.com</span>
            </div>
        </a>

        <a href="https://github.com/vincentsmid" target="_blank" rel="noopener noreferrer" class="contact-link">
            <span class="icon">&#128187;</span>
            <div>
                <strong>GitHub</strong>
                <span>github.com/vincentsmid</span>
            </div>
        </a>

        <a href="https://linkedin.com/in/vincentsmid" target="_blank" rel="noopener noreferrer" class="contact-link">
            <span class="icon">&#128100;</span>
            <div>
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/vincentsmid</span>
            </div>
        </a>
    </div>
</div>

<style>
    .contact {
        padding: 1rem;
    }

    .contact h1 {
        font-size: 2.4rem;
        font-weight: 600;
        margin-bottom: 0.4rem;
        color: #222;
    }

    .subtitle {
        font-size: 1.4rem;
        color: #666;
        margin-bottom: 2rem;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contact-link {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding: 1.2rem;
        background: #f8f8f8;
        border-radius: 0.6rem;
        border: 1px solid #e8e8e8;
        text-decoration: none;
        color: inherit;
        transition: box-shadow 0.2s;
    }

    .contact-link:hover {
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
        text-decoration: none;
    }

    .icon {
        font-size: 2.4rem;
        width: 3.6rem;
        text-align: center;
    }

    .contact-link strong {
        display: block;
        font-size: 1.5rem;
        color: #333;
    }

    .contact-link span {
        font-size: 1.3rem;
        color: #666;
    }
</style>
