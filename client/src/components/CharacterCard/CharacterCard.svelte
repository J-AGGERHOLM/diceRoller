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
  <div class="options-row">
    <span class="character-class">{character.class_name}</span>
    <button
      class="delete-btn"
      on:click={() =>
        fetchDelete(`/characters/${character.id}`).then(() => window.location.reload())}
      ><i class="fa-regular fa-trash-can"></i></button
    >
  </div>
  <h4 class="character-name">{character.name}</h4>
  <div class="character-details">
    <span
      >Level <span class="character-level"
        >{character.level} <span class="character-race">{character.race}</span>
      </span>
    </span>
  </div>
  <button class="play-btn">Play</button>
</div>

<style>
  .character-card {
    width: 23.1vw;
    height: 20vh;
    background-color: rgba(12, 4, 19, 0.438);
    color: aliceblue;
    border-radius: 6px;
    padding: 6px;
    border: 1px solid var(--class-color);
    margin-bottom: 6px;
    position: relative;
  }

  .character-class {
    display: flex;
    justify-self: flex-start;
    background-color: var(--class-color);
    padding: 4px 8px;
    border-radius: 6px;
    font-size: small;
  }

  h4 {
    margin: 0;
    color: #ffffff;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding-bottom: 3px;
  }

  .delete-btn {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #ef4444;
    font-size: larger;
  }

  .play-btn {
    display: block;
    justify-self: center;
    background-color: var(--class-color);
    border: none;
    color: white;
    font-size: larger;
    padding: 8px 16px;
    border-radius: 6px;
    width: calc(100% - 12px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 6px;
  }

  .options-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .character-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.8rem;
    color: #adadad;
  }
</style>
