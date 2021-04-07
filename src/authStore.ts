import { Writable, writable } from 'svelte/store';

export const authToken: Writable<string> = writable("");