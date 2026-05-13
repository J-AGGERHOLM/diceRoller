<script>
  // button handlers can be wired up later
  import logo from '../../assets/Icon.png';
  import { Link } from 'svelte-routing';

  export let onLogOut;
</script>

<nav class="navbar">
  <div class="brand">
    <img src={logo} alt="logo" class="logo" />
    <div class="brand-text">
      <span class="brand-name">ReRoll</span>
      <span class="brand-sub">3D Dice Roller & Character Manager</span>
    </div>
  </div>
  <div class="actions">
    <Link to="/">Log-in</Link>
    <Link to="/overview">Overview</Link>
    <Link to="/dicePage">Dice Page</Link>
    <Link to="/admin">Admin</Link>
    <Link to="/" on:click={onLogOut}>Log-out</Link>

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
    gap: 1rem;
  }

  .logo {
    width: 15%;
    height: auto;
  }

  .brand-text {
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  .brand-name {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Cinzel', serif;
    line-height: 1;
  }

  .brand-sub {
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

  .red {
    background-color: #ef4444;
  }
</style>
