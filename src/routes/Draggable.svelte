<script>
    let { children } = $props();
    let isDragging = false; /* FIXME fix window glitching by merging components */

    function onMouseDown(event) {
        isDragging = true;

        let draggedElement = event.currentTarget.parentElement;
        let startX = parseInt(draggedElement.style.left || 0) - event.clientX;
        let startY = parseInt(draggedElement.style.top || 0) - event.clientY;

        function onMouseMove(event) {
            if (isDragging) {
                draggedElement.style.left = `${event.clientX + startX}px`;
                draggedElement.style.top = `${event.clientY + startY}px`;
            }
        }

        function onMouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onmousedown={onMouseDown}>
    {@render children()}
</div>