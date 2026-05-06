import { writable } from 'svelte/store';

export const selectedDice = writable([]);

export function addDie(die) {
  selectedDice.update((currentArray) => [...currentArray, die]);
}

export function clearDice() {
  selectedDice.set([]);
}

