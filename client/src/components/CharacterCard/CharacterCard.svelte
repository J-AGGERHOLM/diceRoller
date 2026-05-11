<script>
  import { fetchDelete } from '../../util/fetchUtil';

  export let character = {
    name: 'name',
    class_name: 'class',
    race: 'race',
    level: 0,
    id: 0,
  };
</script>

<div class="character-card">
  <h4 class="character-name">{character.name}</h4>
  <div class="character-details">
    <span class="character-class">{character.class_name}</span>
    <span class="character-race">{character.race}</span>
    <span class="character-level">{character.level}</span>
  </div>
  <div class="options-row">
    <button
      class="delete-btn"
      on:click={() =>
        fetchDelete(`/characters/${character.id}`).then(() => window.location.reload())}
      ><i class="fa-regular fa-trash-can"></i></button
    >
  </div>
</div>

<style>
  .character-card {
    width: 33%;
    height: 20vh;
    background-color: rgba(12, 4, 19, 0.438);
    color: aliceblue;
    border-radius: 6px;
    padding: 6px;
    border: 1px solid rgba(79, 93, 122, 0.35);
    margin-bottom: 6px;
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

  .delete-btn {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #ef4444;
    font-size: larger;
  }

  .options-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    bottom: 0;
  }

  .character-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
