<script>
  import CharacterCard from '../components/CharacterCard/CharacterCard.svelte';
  import CharacterModal from '../components/CharacterModal/CharacterModal.svelte';
  import { fetchGet } from '../util/fetchUtil';
  import { onMount } from 'svelte';

  let characters = $state([]);
  let showModal = $state(false);

  onMount(async () => {
    const { data } = await fetchGet('/characters/');
    characters = data;
  });
</script>

<CharacterModal bind:showModal></CharacterModal>
<div class="overview-page">
  <div class="content">
    <div class="header-row">
      <h4 class="page-header">Your characters</h4>
      <button class="create-character-button" onclick={() => (showModal = true)}
        >New Character</button
      >
    </div>
    <div class="divider"></div>
    <div class="cards-container">
      {#each characters as character}
        <CharacterCard {character}></CharacterCard>
      {/each}
    </div>
  </div>
</div>

<style>
  .overview-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 5%;
    gap: 10px;
    max-width: 80%;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    flex-wrap: wrap;
    gap: 0.5%;
    margin-bottom: 10px;
  }

  .page-header {
    display: flex;
    align-self: flex-start;
    font-size: x-large;
    padding-bottom: 10px;
  }

  .create-character-button {
    background-color: #22c55e;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }

  .header-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .divider {
    border-top: 1px solid rgba(79, 93, 122, 0.35);
    width: 100%;
  }
</style>
