<script>
  import { raceList, classList } from '../../data/characterData.js';

  let { showModal = $bindable(), name, class_name, race, level } = $props();

  let dialog = $state();

  $effect(() => {
    if (showModal) dialog.showModal();
  });
</script>

<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
>
  <button onclick={() => dialog.close()}>close</button>
  <div>
    <labal>Name</labal>
    <input type="text" bind:value={name} placeholder="Character Name" />
    <label>Class</label>
    <select bind:value={race}>
      <option value="" disabled>Select a race</option>
      {#each raceList as race}
        <option value={race.name}>{race.name}</option>
      {/each}
    </select>
    <label>Race</label>
    <select bind:value={class_name}>
      <option value="" disabled>Select a class</option>
      {#each classList as class_name}
        <option value={class_name.name}>{class_name.name}</option>
      {/each}
    </select>
    <label>level</label>
    <input placeholder="Level" bind:value={level} />
  </div>
</dialog>
