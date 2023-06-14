import type { Position } from '@threlte/core';
import { writable } from 'svelte/store';

export const standardGravity: Position = { y: -9.81 };
export const noGravity: Position = { y: 0 };
export const gravity = writable<Position>(noGravity);

export const unique = writable({});
