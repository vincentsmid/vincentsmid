<script>
    import Draggable from './Draggable.svelte';
    import {windows} from './store.js';
    import {fly} from 'svelte/transition';

    function closeWindow(id) {
        windows.update(n => n.filter(win => win.id !== id));
    }

    let maximizedWindows = $state(new Set());

    function toggleWindowMaximized(id) {
        let windowElem = document.querySelector(`.window[data-id="${id}"]`);
        if (maximizedWindows.has(id)) {
            maximizedWindows.delete(id);
            if (windowElem) {
                windowElem.style.top = '50%';
                windowElem.style.left = '50%';
                windowElem.style.transform = 'translate(-50%, 0%)';
            }
        } else {
            maximizedWindows.add(id);
            if (windowElem) {
                windowElem.style.top = '50%';
                windowElem.style.left = '50%';
                windowElem.style.transform = 'translate(-50%, -50%)';
            }
        }
        maximizedWindows = new Set(maximizedWindows);
    }
</script>

{#each $windows as {id, content, width, height}}
    <div in:fly="{{ y: -200, duration: 300 }}" out:fly="{{ y: 200, duration: 300 }}">
        <div class="window" class:maximized={maximizedWindows.has(id)} data-id={id} style="width: {width}; height: {height};">
            {#if !maximizedWindows.has(id)}
                <Draggable>
                    <div class="title-bar container">
                        <button class="svg-box container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.5" cy="2.5" r="2.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.5" cy="2.5" r="2.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.5" cy="2.5" r="2.5" />
                            </svg>
                        </button>
                        <span>{content.title}</span>
                        <div class="button-box container">
                            <button class="button-close" onclick={() => toggleWindowMaximized(id)}></button>
                            <button class="button-close" onclick={() => toggleWindowMaximized(id)}></button>
                            <button class="button-close" onclick={() => closeWindow(id)}></button>
                        </div>
                    </div>
                </Draggable>
            {:else}
                <div class="title-bar container">
                    <button class="svg-box container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <circle cx="2.5" cy="2.5" r="2.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <circle cx="2.5" cy="2.5" r="2.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <circle cx="2.5" cy="2.5" r="2.5" />
                        </svg>
                    </button>
                    <span>{content.title}</span>
                    <div class="button-box container">
                        <button class="button-close" onclick={() => closeWindow(id)}></button>
                        <button class="button-close" onclick={() => toggleWindowMaximized(id)}></button>
                        <button class="button-close" onclick={() => closeWindow(id)}></button>
                    </div>
                </div>
            {/if}
            <div class="window-content">
                <content.body />
            </div>
        </div>
    </div>
{/each}

<style>
  @import 'styles.css';
  .window {
      position: relative;
      background-color: var(--color-theme-2);
      border-radius: 0.8rem;
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }

  .title-bar {
      background-color: var(--color-theme-1);
      height: 3rem;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      user-select: none;
      cursor: grab;
      color: var(--color-theme-3);
      text-align: center;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: normal;
      justify-content: space-between;
  }

  .container {
      display: flex;
      align-items: center;
  }

  .button-box {
      width: 6.4rem;
      height: 2.2rem;
      border-radius: 0.8rem;
      background: var(--color-theme-4);
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      margin-left: 0.8rem;
      margin-right: 0.4rem;
      justify-content: space-around;
  }

  .button-close {
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      background-color: var(--color-theme-5);
      border: none;
      border-radius: 0.8rem;
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      margin-top: 0.1rem;
  }

  .button-close:hover {
      background-color: var(--color-theme-8);
      transition: 0.5s;
  }

  .svg-box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.2rem;
      background-color: transparent;
      border: none;
      color: transparent;
      justify-content: space-between;
      margin-left: 1rem;
  }

  .svg-box svg {
      fill: var(--color-theme-5);
      width: 0.5rem;
      height: 0.5rem;
  }

  .window-content {
      padding: 1rem;
      margin: 0;
  }

  .window.maximized {
      width: 100vw !important;
      height: 100vh !important;
      border-radius: 0;
      box-shadow: none;
      position: fixed !important;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
  }
</style>