import { writable, get } from 'svelte/store';

/**
 * @typedef {import('svelte').Component} SvelteComponent
 */

/**
 * @typedef {{
 *   id: number,
 *   content: { title: string, body: SvelteComponent },
 *   width: string,
 *   height: string,
 *   x: number,
 *   y: number,
 *   zIndex: number,
 *   minimized: boolean,
 *   maximized: boolean
 * }} WindowState
 */

let nextZIndex = 100;

/** @type {import('svelte/store').Writable<WindowState[]>} */
export const windows = writable([]);

/**
 * @param {number} id
 * @param {string} title
 * @param {SvelteComponent} body
 * @param {string} width
 * @param {string} height
 */
export function openWindow(id, title, body, width, height) {
    const existing = get(windows).find(w => w.content.title === title);
    if (existing) {
        if (existing.minimized) {
            restoreWindow(existing.id);
        }
        bringToFront(existing.id);
        return;
    }

    const offsetX = (id % 5) * 30;
    const offsetY = (id % 5) * 30;
    const x = Math.max(40, (window.innerWidth - 600) / 2 + offsetX);
    const y = Math.max(40, (window.innerHeight - 400) / 2 + offsetY);

    windows.update(wins => [...wins, {
        id,
        content: { title, body },
        width,
        height,
        x,
        y,
        zIndex: nextZIndex++,
        minimized: false,
        maximized: false
    }]);
}

/** @param {number} id */
export function closeWindow(id) {
    windows.update(wins => wins.filter(w => w.id !== id));
}

/** @param {number} id */
export function bringToFront(id) {
    windows.update(wins => wins.map(w =>
        w.id === id ? { ...w, zIndex: nextZIndex++ } : w
    ));
}

/** @param {number} id */
export function minimizeWindow(id) {
    windows.update(wins => wins.map(w =>
        w.id === id ? { ...w, minimized: true } : w
    ));
}

/** @param {number} id */
export function restoreWindow(id) {
    windows.update(wins => wins.map(w =>
        w.id === id ? { ...w, minimized: false, zIndex: nextZIndex++ } : w
    ));
}

/** @param {number} id */
export function toggleMaximized(id) {
    windows.update(wins => wins.map(w =>
        w.id === id ? { ...w, maximized: !w.maximized } : w
    ));
}

/**
 * @param {number} id
 * @param {number} x
 * @param {number} y
 */
export function updateWindowPosition(id, x, y) {
    windows.update(wins => wins.map(w =>
        w.id === id ? { ...w, x, y } : w
    ));
}
