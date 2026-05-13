export const classList = [
  { name: 'Barbarian', hitDie: 12, savingThrows: ['str', 'con'], color: 'red' },
  { name: 'Bard', hitDie: 8, savingThrows: ['dex', 'cha'], color: 'purple' },
  { name: 'Cleric', hitDie: 8, savingThrows: ['wis', 'cha'], color: 'yellow' },
  { name: 'Druid', hitDie: 8, savingThrows: ['int', 'wis'], color: 'yellowgreen' },
  { name: 'Fighter', hitDie: 10, savingThrows: ['str', 'con'], color: 'brown' },
  { name: 'Monk', hitDie: 8, savingThrows: ['str', 'dex'], color: 'orange' },
  { name: 'Paladin', hitDie: 10, savingThrows: ['wis', 'cha'], color: 'goldenrod' },
  { name: 'Ranger', hitDie: 10, savingThrows: ['str', 'dex'], color: 'green' },
  { name: 'Rogue', hitDie: 8, savingThrows: ['dex', 'int'], color: 'darkmagenta' },
  { name: 'Sorcerer', hitDie: 6, savingThrows: ['con', 'cha'], color: 'cyan' },
  { name: 'Warlock', hitDie: 8, savingThrows: ['wis', 'cha'], color: 'darkorchid' },
  { name: 'Wizard', hitDie: 6, savingThrows: ['int', 'wis'], color: 'blue' },
];

export const raceList = [
  {
    name: 'Human',
    bonuses: { str_socre: 1, dex_score: 1, con_score: 1, int_score: 1, wis_score: 1, cha_score: 1 },
  },
  { name: 'Elf', bonuses: { dex_score: 2 } },
  { name: 'Dwarf', bonuses: { con_score: 2 } },
  { name: 'Halfling', bonuses: { dex_score: 2 } },
  { name: 'Gnome', bonuses: { int_score: 2 } },
  { name: 'Half-Elf', bonuses: { cha_score: 2, str_score: 1, dex_score: 1 } },
  { name: 'Half-Orc', bonuses: { str_score: 2, con_score: 1 } },
  { name: 'Tiefling', bonuses: { cha_score: 2, int_score: 1 } },
  { name: 'Dragonborn', bonuses: { str_score: 2, cha_score: 1 } },
];

export const abilityList = [
  { key: 'str_score', name: 'Strength' },
  { key: 'dex_score', name: 'Dexterity' },
  { key: 'con_score', name: 'Constitution' },
  { key: 'int_score', name: 'Intelligence' },
  { key: 'wis_score', name: 'Wisdom' },
  { key: 'cha_score', name: 'Charisma' },
];

export const saveList = [
  { key: 'str_score', name: 'STR Save' },
  { key: 'dex_score', name: 'DEX Save' },
  { key: 'con_score', name: 'CON Save' },
  { key: 'int_score', name: 'INT Save' },
  { key: 'wis_score', name: 'WIS Save' },
  { key: 'cha_score', name: 'CHA Save' },
];
