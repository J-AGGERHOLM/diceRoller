// characterStore.js
import { writable } from 'svelte/store';

export const character = writable({
  id: 1,
  name: 'Origrin Doomhammer',
  level: 1,
  race: 'human',
  className: 'fighter',
  abilities: {
    str: 15,
    dex: 12,
    con: 13,
    int: 8,
    wis: 14,
    cha: 11,
  },
});
