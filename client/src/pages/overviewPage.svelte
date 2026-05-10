<script>
  import CharacterCard from '../components/CharacterCard/CharacterCard.svelte';
  import { fetchGet } from '../util/fetchUtil';
  import { onMount } from 'svelte';

  let characters = [];

  onMount(async () => {
    const {data} = await fetchGet('/characters/');
    characters = data;
  });
</script>

<span>Hello, welcome to the site!</span>
{#each characters as character}
  <CharacterCard {character}></CharacterCard>
{/each}
