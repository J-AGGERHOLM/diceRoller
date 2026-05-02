import { writable, readable, get } from 'svelte/store';

export const characters = writable([
  {
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
  },
]);

export const selectedCharacterID = writable(1);

export const selectedCharacter = writable(
  get(characters).find((character) => {
    return character.id === get(selectedCharacterID);
  }),
);
