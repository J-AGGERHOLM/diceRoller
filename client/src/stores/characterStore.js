// characterStore.js
import { writable } from 'svelte/store';

export const character = writable({
  id: 1,
  name: 'Origrin Doomhammer',
  level: 1,
  race: 'Human',
  class_name: 'Fighter',
  str_score: 15,
  dex_score: 12,
  con_score: 13,
  int_score: 8,
  wis_score: 14,
  cha_score: 11,
});
