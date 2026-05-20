<script>
  import '../css/dicePage.css';
  import DiceViewer from '../components/DiceViewer/DiceViewer.svelte';
  import DiceRow from '../components/DiceRow/DiceRow.svelte';
  import QuickActions from '../components/QuickActions/QuickActions.svelte';
  import CharacterSheet from '../components/CharacterSheet/CharacterSheet.svelte';
  import ChatRoom from '../components/ChatRoom/ChatRoom.svelte';
</script>

<div class="page">
  <main class="layout">
    <div class="left-col">
      <ChatRoom></ChatRoom>
    </div>
    <div class="middle-col">
      <DiceViewer></DiceViewer>
      <DiceRow></DiceRow>
    </div>
    <div class="right-col">
      <CharacterSheet></CharacterSheet>
    </div>
  </main>
</div>
