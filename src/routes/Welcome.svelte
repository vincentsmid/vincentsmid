<script>
  import { onMount } from 'svelte';

  let showEnded = $state(false);
  let playerVisible = $state(true);
  /** @type {HTMLDivElement | undefined} */
  let playerContainer = $state();

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const { DotLottie } = await import('@lottiefiles/dotlottie-web');

      const canvas = document.createElement('canvas');
      canvas.style.width = '57rem';
      canvas.style.height = '32rem';
      playerContainer?.appendChild(canvas);

      const player = new DotLottie({
        canvas,
        src: 'https://lottie.host/fd36e9cc-2cd6-4956-8751-2549d5abe64f/PsTImqB3O2.json',
        autoplay: true,
        speed: 1
      });

      player.addEventListener('complete', () => {
        playerVisible = false;
        showEnded = true;
      });
    }
  });
</script>

{#if playerVisible}
  <div class="player-container" bind:this={playerContainer}>
  </div>
{/if}

{#if showEnded}
  <div class="greeting">
    <h1>Hi there!</h1>
  </div>
{/if}

<style>
  .player-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<!-- TODO: fix window fullscreen content scaling, add something after this animation, fix draggable bug-->