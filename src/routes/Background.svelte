<script>
    import Background from '$lib/images/bground.jpg'
    import BackgroundLowRes from '$lib/images/bground_lowres.jpg'

    let imageLoaded = $state(false);

    function handleImageLoad() {
        imageLoaded = true;
    }
</script>

<div class="background-container">
    <div
            class="background-image low-res"
            style="background-image: url({BackgroundLowRes});">
    </div>

    <img
        src={Background}
        alt=""
        style="display: none;"
        onload={handleImageLoad}
    />

    <div
            class="background-image high-res {imageLoaded ? 'loaded' : ''}"
            style="background-image: url({Background});">
    </div>
</div>

<style>
    .background-container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: -9;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .background-image.low-res {
        z-index: -10;
        opacity: 0.5;
    }

    .background-image.high-res {
        z-index: -9;
        opacity: 0;
    }

    .background-image.high-res.loaded {
        opacity: 1;
    }
</style>