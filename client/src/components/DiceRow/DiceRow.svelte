<script>
  import D20 from "../../assets/diceSet/d20.png" 
  import D12 from "../../assets/diceSet/d12.png" 
  import D10 from "../..//assets/diceSet/d10.png" 
  import D100 from "../..//assets/diceSet/d100.png" 
  import D6 from "../..//assets/diceSet/d6.png" 
  import D4 from "../..//assets/diceSet/d4.png" 

  // =========== Dice preset =========== //
  const dice = [
    { label: 'D20', img: D20, color: "red"},
    { label: 'D12', img: D12, color: "purple"},
    { label: 'D10', img: D10, color: "blue"},
    { label: 'Dd100', img: D100, color: "teal"},
    { label: 'D6', img: D6, color: "green"},
    { label: 'D4', img: D4, color: "yellow"},
  ];

  let selectedList = [];

// =========== die functions =========== //

   function addDie(die) {
    //check for die with die label in list
    const existingDie = selectedList.find(d => d.label === die.label);

    if (existingDie) {
      selectedList = selectedList.map(d =>
        d.label === die.label
        //if existing we use spread operater to rebind (?) 
        // selectedList into a copy of the same list + the new die
          ? { ...d, count: d.count + 1 }
          : d
      );
    } else {
      selectedList = [...selectedList, { ...die, count: 1 }];
    }
  }

   function isSelected(die) {
    return selectedList.some(d => d.label === die.label);
  }

  function displayCount(die){
    return selectedList.find(d => d.label === die.label)?.count || 0;
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
      <img src={die.img} alt={die.label}/>
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
    gap: 16px;
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
    gap: 1em;
    flex-wrap: wrap;
  }

  .dieLabelConnector{
    display: flex;
    flex-direction: column;
  }

  .dieLabelConnector span {
    padding-bottom: 1em;

  }

  .die {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.2s, transform 0.2s;
  }

  .die:hover {
    opacity: 1;
    transform: scale(1.5);
  }

  .die.selected img{
    opacity: 1;
    filter: brightness(1.2) drop-shadow(0 0 10px var(--die-color));
  }
</style>