<script>
  import { character } from '../../stores/characterStore';
  import { calculateModifier, calculateHitpoints } from '../../util/dndCalculations.js';
  // ============== is edit mode ============== //
  let editMode = $state(false);

  // ============== form defaults ============== //
  let name = $state($character.name);
  let className = $state($character.className);
  let race = $state($character.race);
  let level = $state($character.level);
  let abilities = $state({ ...$character.abilities });

  // ============== template lists ============== //
  const abilityList = [
    { key: 'str', name: 'Strength' },
    { key: 'dex', name: 'Dexterity' },
    { key: 'con', name: 'Constitution' },
    { key: 'int', name: 'Intelligence' },
    { key: 'wis', name: 'Wisdom' },
    { key: 'cha', name: 'Charisma' },
  ];

  const saveList = [
    { key: 'str', name: 'STR Save' },
    { key: 'dex', name: 'DEX Save' },
    { key: 'con', name: 'CON Save' },
    { key: 'int', name: 'INT Save' },
    { key: 'wis', name: 'WIS Save' },
    { key: 'cha', name: 'CHA Save' },
  ];

  const classList = [
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

  const raceList = [
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

  // ============== calculated values ============== //
  let selectedRace = $derived(
    raceList.find((race) => race.name.toLocaleLowerCase() === $character.race.toLocaleLowerCase()),
  );
  let conModifier = $derived(
    calculateModifier($character.abilities.con, selectedRace?.bonuses?.con ?? 0),
  );
  let maxHitpoints = $derived(
    calculateHitpoints($character.className, $character.level, conModifier, classList),
  );

  // ============== functions ============== //
  function saveEdits() {
    character.set({ ...$character, name, className, level, race, abilities });
    editMode = false;
  }
</script>

<div class="sheet">
  <!-- Header with edit toggle -->
  <div class="sheet-header">
    <span class="sheet-title">Character Sheet</span>
    <button
      class="edit-btn"
      onclick={() => {
        if (editMode) {
          saveEdits();
        } else {
          editMode = true;
        }
      }}
    >
      {editMode ? 'Save' : 'Edit'}
    </button>
  </div>

  <!-- Character info fields -->
  <div class="info-grid">
    <div class="display">
      <label>Name</label>
      {#if editMode}
        <input type="text" bind:value={name} placeholder="Character name" />
      {:else}
        <span class="display-value">{$character?.name || '—'}</span>
      {/if}
    </div>

    <div class="display">
      <label>Class</label>
      {#if editMode}
        <select bind:value={className}>
          <option value="" disabled>Select a class</option>
          {#each classList as classOption}
            <option value={classOption.name}>{classOption.name}</option>
          {/each}
        </select>
      {:else}
        <span class="display-value">{$character?.className || '—'}</span>
      {/if}
    </div>

    <div class="display">
      <label>Race</label>
      {#if editMode}
        <select bind:value={race}>
          <option value="" disabled>Select a race</option>
          {#each raceList as race}
            <option value={race.name}>{race.name}</option>
          {/each}
        </select>
      {:else}
        <span class="display-value">{$character?.race || '—'}</span>
      {/if}
    </div>

    <div class="display">
      <label>Level</label>
      {#if editMode}
        <input placeholder="level" bind:value={level} />
      {:else}
        <span class="display-value">{$character?.level || '—'}</span>
      {/if}
    </div>
  </div>

  <!-- HP and AC display -->
  <div class="stat-bar">
    <div class="stat hp">
      <span class="stat-label">HP</span>
      <span>{maxHitpoints}</span>
    </div>
    <div class="stat ac">
      <span class="stat-label">AC</span>
    </div>
  </div>

  <!-- Ability scoers -->
  <h4>ABILITY SCORES</h4>
  {#each abilityList as ability}
    <div class="ability-row">
      <span class="ability-name">{ability.name}</span>

      {#if editMode}
        <input class="ability-input-display" bind:value={abilities[ability.key]} />
      {:else}
        <span class="ability-input-display"> {$character?.abilities?.[ability.key] ?? '---'} </span>
      {/if}
      <span class="racial-bonus">{selectedRace?.bonuses?.[ability.key] ?? 0}</span>
      <span class="modifier"
        >{calculateModifier(
          $character?.abilities?.[ability.key],
          selectedRace?.bonuses?.[ability.key] ?? 0,
        )}</span
      >
    </div>
  {/each}

  <!-- Saving Throsw -->
  <h4>SAVING THROWS</h4>
  {#each saveList as save}
    <div class="save-row">
      <span class="proficiency-toggle"></span>
      <span class="save-name">{save.name}</span>
      <span class="save-mod"
        >{calculateModifier(
          $character?.abilities?.[save.key],
          selectedRace?.bonuses?.[save.key] ?? 0,
        )}</span
      >
    </div>
  {/each}
</div>

<style>
  /* ---- Sheet container ---- */
  .sheet {
    background-color: #12122a;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    font-size: 0.8rem;
  }

  /* ---- Header ---- */
  .sheet-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sheet-title {
    font-weight: bold;
    font-size: 0.75rem;
    color: #aaa;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .edit-btn {
    background-color: #2a2a4a;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 3px 10px;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .edit-btn:hover {
    background-color: #3a3a6a;
  }

  /* ---- Character info grid ---- */
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .display label {
    display: block;
    font-size: 0.65rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .display input,
  .display select {
    width: 100%;
    background-color: #1e1e3a;
    border: 1px solid #2a2a4a;
    border-radius: 4px;
    color: white;
    padding: 4px 8px;
    box-sizing: border-box;
    font-size: 0.8rem;
  }

  .display-value {
    font-size: 0.85rem;
    font-weight: 600;
    color: white;
    display: block;
    padding: 2px 0;
  }

  /* ---- HP / AC bar ---- */
  .stat-bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .stat {
    border-radius: 6px;
    padding: 6px;
    text-align: center;
  }

  .hp {
    background-color: #7f1d1d;
  }
  .ac {
    background-color: #1e3a5f;
  }

  .stat-label {
    display: block;
    font-size: 0.6rem;
    color: #ccc;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-value {
    font-size: 1rem;
    font-weight: bold;
  }

  /* ---- Section headers ---- */
  h4 {
    margin: 0;
    font-size: 0.65rem;
    color: #555;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid #2a2a4a;
    padding-bottom: 3px;
  }

  /* ---- Ability rows ---- */
  .ability-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 8px;
    background-color: #1e1e3a;
    border-radius: 4px;
  }

  .ability-name {
    flex: 1;
    font-size: 0.75rem;
    color: #aaa;
  }

  .ability-input-display {
    width: 32px;
    text-align: center;
    font-size: 0.85rem;
    font-weight: bold;
    background-color: #1e1e3a;
    border: 1px solid #2a2a4a;
    border-radius: 4px;
    color: white;
    padding: 2px 0;
  }

  .racial-bonus {
    width: 24px;
    text-align: center;
    font-size: 0.75rem;
    color: #a855f7;
    font-weight: 600;
  }

  .modifier {
    width: 32px;
    text-align: center;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: #0f0f1e;
    border: 1px solid #2a2a4a;
    color: white;
  }

  /* ---- Saving throw rows ---- */
  .save-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 4px;
  }

  .save-row:nth-child(odd) {
    background-color: #1a1a30;
  }

  .proficiency-toggle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #444;
    background-color: #0f0f1e;
    flex-shrink: 0;
  }

  .save-name {
    flex: 1;
    font-size: 0.75rem;
    color: #aaa;
  }

  .save-mod {
    width: 32px;
    text-align: center;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: #0f0f1e;
    border: 1px solid #2a2a4a;
    color: white;
  }
</style>
