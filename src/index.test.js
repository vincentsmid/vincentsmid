import { describe, it, expect } from 'vitest';

describe('store helpers', () => {
	it('module can be imported', async () => {
		const store = await import('./routes/store.js');
		expect(store.windows).toBeDefined();
		expect(store.closeWindow).toBeDefined();
		expect(store.bringToFront).toBeDefined();
		expect(store.minimizeWindow).toBeDefined();
		expect(store.toggleMaximized).toBeDefined();
	});
});
