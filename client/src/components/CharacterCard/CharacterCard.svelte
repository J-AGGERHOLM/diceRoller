<script>
  export let character = {
    name: 'name',
    class_name: 'class',
    race: 'race',
    lvl: 0,
  };
</script>

<div class="character-card">
  <h4 class="character-name">{character.name}</h4>
  <span class="character-class">{character.class_name}</span>
  <span class="character-race">{character.race}</span>
  <span class="character-level">{character.lvl}</span>
</div>

<style>
  .character-card {
    max-width: 15vw;
    max-height: 15vh;
    background-color: black;
    color: aliceblue;
    border-radius: 6px;
    padding: 6px;
  }

  h4 {
    margin: 0;
    font-size: 0.65rem;
    color: #555;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid #2a2a4a;
    padding-bottom: 3px;
  }
</style>
