<script>
    import "../css/dicePage.css"
    import Navbar from "../components/Navbar/Navbar.svelte";
    import DiceViewer from "../components/DiceViewer/DiceViewer.svelte";
    import DiceRow from "../components/DiceRow/DiceRow.svelte";
    import QuickActions from "../components/QuickActions/QuickActions.svelte";
    import CharacterSheet from "../components/CharacterSheet/CharacterSheet.svelte";
</script>

<div class="page">
<main class="layout">
    <div class="left-col">
        <DiceViewer></DiceViewer>
        <DiceRow></DiceRow>
        <QuickActions></QuickActions>
    </div>
    <div class = "right-col">
        <CharacterSheet></CharacterSheet>
    </div>
</main>
</div>