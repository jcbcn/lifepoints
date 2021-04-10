import { Writable, writable } from 'svelte/store';

export const points: Writable<number> = writable(0);