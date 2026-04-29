<script>
  // button handlers can be wired up later
  import logo from "../../assets/Icon.png"
</script>

<nav class="navbar">
  <div class="brand">
    <img src="{logo}" alt="logo" class="logo">
    <div class="brand-text">
      <span class="brand-name">DiceForge</span>
      <span class="brand-sub">3D Dice Roller & Character Manager</span>
    </div>
  </div>
  <div class="actions">
    <button class="btn green">Save</button>
    <button class="btn purple">Dice Style</button>
    <button class="btn red">Sign Out</button>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background-color: #12122a;
    border-bottom: 1px solid #2a2a4a;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo {
    width: 25%;
    height: auto;
  }

  .brand-name {
    display: block;
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 10%;
  }

  .brand-sub {
    display: block;
    font-size: 0.75rem;
    color: #888;
  }

  .actions {
    display: flex;
    gap: 10px;
  }

  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }

  .green  { background-color: #22c55e; }
  .purple { background-color: #a855f7; }
  .red    { background-color: #ef4444; }
</style>