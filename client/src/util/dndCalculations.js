export function calculateModifier(abilityScore) {
  return Math.floor((abilityScore - 10) / 2);
}

export function calculateHitpoints(className, lvl, conModifier, classList) {
  const dndClass = classList.find((classEntry) => classEntry.name.toLowerCase() === className);
  const hitDie = dndClass?.hitDie ?? 8;
  return Math.floor(hitDie + conModifier * lvl + (hitDie / 2) * (lvl - 1));
}
