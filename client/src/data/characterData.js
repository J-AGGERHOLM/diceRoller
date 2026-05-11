export const classList = [
    { name: 'Barbarian', hitDie: 12, savingThrows: ['str', 'con'] },
    { name: 'Bard', hitDie: 8, savingThrows: ['dex', 'cha'] },
    { name: 'Cleric', hitDie: 8, savingThrows: ['wis', 'cha'] },
    { name: 'Druid', hitDie: 8, savingThrows: ['int', 'wis'] },
    { name: 'Fighter', hitDie: 10, savingThrows: ['str', 'con'] },
    { name: 'Monk', hitDie: 8, savingThrows: ['str', 'dex'] },
    { name: 'Paladin', hitDie: 10, savingThrows: ['wis', 'cha'] },
    { name: 'Ranger', hitDie: 10, savingThrows: ['str', 'dex'] },
    { name: 'Rogue', hitDie: 8, savingThrows: ['dex', 'int'] },
    { name: 'Sorcerer', hitDie: 6, savingThrows: ['con', 'cha'] },
    { name: 'Warlock', hitDie: 8, savingThrows: ['wis', 'cha'] },
    { name: 'Wizard', hitDie: 6, savingThrows: ['int', 'wis'] },
  ];

 export const raceList = [
    { name: 'Human', bonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
    { name: 'Elf', bonuses: { dex: 2 } },
    { name: 'Dwarf', bonuses: { con: 2 } },
    { name: 'Halfling', bonuses: { dex: 2 } },
    { name: 'Gnome', bonuses: { int: 2 } },
    { name: 'Half-Elf', bonuses: { cha: 2, str: 1, dex: 1 } },
    { name: 'Half-Orc', bonuses: { str: 2, con: 1 } },
    { name: 'Tiefling', bonuses: { cha: 2, int: 1 } },
    { name: 'Dragonborn', bonuses: { str: 2, cha: 1 } },
  ];