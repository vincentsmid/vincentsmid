<script>
    import './styles.css';
</script>

<div class="about">
    <div class="profile-section">
        <img src="https://i.imgur.com/8QZqQ1M.png" alt="Vincent Smid" class="avatar" />
        <div class="intro">
            <h1>Vincent Smid</h1>
            <p class="tagline">Software Developer</p>
        </div>
    </div>

    <div class="bio">
        <p>
            Hello! I'm a software developer with a passion for building clean, interactive
            web experiences. I enjoy working across the full stack, from crafting pixel-perfect
            UIs to designing robust backend systems.
        </p>
        <p>
            When I'm not coding, you can find me exploring new technologies, contributing
            to open source, or tinkering with creative side projects like this desktop-themed
            portfolio.
        </p>
    </div>
</div>

<style>
    .about {
        padding: 1.5rem;
    }

    .profile-section {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .avatar {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
    }

    .intro h1 {
        font-size: 2.4rem;
        font-weight: 700;
        color: #222;
        margin-bottom: 0.3rem;
    }

    .tagline {
        font-size: 1.5rem;
        color: #666;
        margin: 0;
    }

    .bio p {
        font-size: 1.5rem;
        color: #444;
        line-height: 1.7;
        margin: 0 0 1rem 0;
    }
</style>
