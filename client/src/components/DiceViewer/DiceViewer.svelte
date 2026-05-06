<script>
  import DiceBox from '@3d-dice/dice-box';
  import { onMount } from 'svelte';
  import { selectedDice, clearDice } from '../../stores/selectedDieStore';

  let diceBox;

  onMount(async () => {
    diceBox = new DiceBox({
      container: '#dice-box',
      assetPath: '/assets/dice-box/',
      scale: 14,
      offscreen: true,
      theme: 'default',
    });
    await diceBox.init();
  });

  function countDice(selectedDice) {
    const counts = {};
    selectedDice.forEach((die) => {
      counts[die.label] = (counts[die.label] || 0) + 1;
    });
    return counts;
  }

  function parceForDiceBox(counts) {
    return Object.entries(counts).map(([label, count]) => `${count}${label}`);
  }

  async function rollDce() {
    if ($selectedDice.length === 0) return;

    const counts = countDice($selectedDice);
    const parcedArray = parceForDiceBox(counts);

    const results = await diceBox.roll(parcedArray);
  }
</script>

<div class="viewer">
  <div id="dice-box" class="dice-box"></div>
  <div class="button-row">
    <button class="roll-btn" on:click={rollDce}>ROLL</button>
    <button class="clear-dice" on:click={clearDice}>Clear Dice</button>
  </div>
</div>

<style>
  .viewer {
    background-color: #0f0f1a28;
    border: 1px solid #dc26269c;
    border-radius: 12px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 24px;
    position: relative;
  }

  .dice-box {
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  :global(#dice-box canvas) {
    width: 100% !important;
    height: 100% !important;
  }

  .button-row {
    display: flex;
    flex-direction: row;
    gap: 1vw;
  }

  .roll-btn {
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 32px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 1px;
  }

  .roll-btn:hover {
    background-color: #dc2626;
  }

  .clear-dice {
    max-width: 5vw;
    background: none;
    border: 1px solid #ffffff20;
    color: #ffffff60;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 0.75rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition:
      border-color 0.2s,
      color 0.2s;
  }

  .clear-dice:hover {
    border-color: #ffffff50;
    color: #ffffff90;
  }
</style>
