<script>
  import { raceList, classList } from '../../data/characterData.js';
  import { fetchPost } from '../../util/fetchUtil.js';

  let { showModal = $bindable(), name = '', class_name = '', race = '', level = 1 } = $props();

  let dialog = $state();

  $effect(() => {
    if (showModal) dialog.showModal();
  });

  async function Save(event) {
    event.preventDefault();
    fetchPost('/characters', { name, race, class_name, level });
    dialog.close();
  }
</script>

<dialog
  class="modal-container"
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
>
  <button class="close-btn" onclick={() => dialog.close()}><i class="fa-solid fa-xmark"></i></button
  >
  <h4>New Character</h4>
  <form class="content">
    <label>Name</label>
    <input type="text" bind:value={name} placeholder="Character Name" />
    <label>Race</label>
    <select bind:value={race}>
      <option value="" disabled>Select a race</option>
      {#each raceList as race}
        <option value={race.name}>{race.name}</option>
      {/each}
    </select>
    <label>Class</label>
    <select bind:value={class_name}>
      <option value="" disabled>Select a class</option>
      {#each classList as class_name}
        <option value={class_name.name}>{class_name.name}</option>
      {/each}
    </select>
    <label>level</label>
    <input placeholder="Level" bind:value={level} />
    <div class="options-row">
      <button type="submit" class="save-btn" onclick={Save}>Save</button>
    </div>
  </form>
</dialog>

<style>
  .content {
    display: flex;
    flex-direction: column;
    padding: 5%;
    justify-self: center;
    align-self: center;
  }

  .modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 25vw;
    height: 36h;
    background-color: rgba(15, 15, 34, 0.747);
    border-radius: 6px;
    border: 1px solid rgba(79, 93, 122, 0.35);
  }

  .close-btn {
    background-color: rgba(240, 248, 255, 0);
    color: rgb(179, 179, 179);
    font-size: larger;
    border: none;
    position: relative;
    display: flex;
    align-self: flex-start;
    padding: 10px 20px;
  }

  .options-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .save-btn {
    background-color: #22c55e;
    padding: 4px 8px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }

  input,
  select {
    width: 100%;
    background-color: #1e1e3a;
    border: 1px solid #2a2a4a;
    border-radius: 4px;
    color: white;
    padding: 4px 8px;
    box-sizing: border-box;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }

  label {
    display: flex;
    font-size: 0.65rem;
    color: #c9c9c9;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
</style>
