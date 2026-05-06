<script>
  import D20 from '../../assets/diceSet/d20.png';
  import D12 from '../../assets/diceSet/d12.png';
  import D10 from '../..//assets/diceSet/d10.png';
  import D100 from '../..//assets/diceSet/d100.png';
  import D6 from '../..//assets/diceSet/d6.png';
  import D4 from '../..//assets/diceSet/d4.png';

  import { selectedDice, addDie } from '../../stores/selectedDieStore.js';

  // =========== Dice preset =========== //
  const dice = [
    { label: 'd20', img: D20, color: 'red' },
    { label: 'd12', img: D12, color: 'purple' },
    { label: 'd10', img: D10, color: 'blue' },
    { label: 'd100', img: D100, color: 'teal' },
    { label: 'd6', img: D6, color: 'green' },
    { label: 'd4', img: D4, color: 'yellow' },
  ];

  // =========== die functions =========== //

  function isSelected(die) {
    return $selectedDice.some((d) => d.label === die.label);
  }

  function displayCount(die) {
    const count = $selectedDice.filter((d) => d.label === die.label).length;
    return count > 0 ? `x${count}` : '';
  }
</script>

<span class="label">Dice Row:</span>

<div class="dice-row">
  <div class="dice-list">
    {#each dice as die}
      <div class="dieLabelConnector">
        <span>{displayCount(die)}</span>
        <button
          class="die"
          class:selected={isSelected(die)}
          style="--die-color: {die.color}"
          on:click={() => {
            addDie(die);
            displayCount(die);
          }}
          title={die.label}
        >
          <img src={die.img} alt={die.label} />
        </button>
      </div>
    {/each}
  </div>
</div>

<style>
  .dice-row {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 6px;
    max-height: 5vh;
  }

  .label {
    display: flex;
    color: #adadad;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding-bottom: 4px;
  }

  .dice-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
  }

  .dieLabelConnector {
    display: flex;
    flex-direction: column;
    max-width: 4em;
  }

  .dieLabelConnector span {
    padding-bottom: 0.5em;
  }

  .die {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.75;
    transition:
      opacity 0.2s,
      transform 0.2s;
    max-height: 50%;
  }

  .die img {
    height: 100%;
  }

  .die:hover {
    opacity: 1;
    transform: scale(1.5);
  }

  .die.selected img {
    opacity: 1;
    filter: brightness(1.2) drop-shadow(0 0 10px var(--die-color));
  }


</style>
