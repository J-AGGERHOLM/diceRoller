<script>
  import { onMount } from 'svelte';

  import logo from '../../assets/Icon.png';
  import { Link } from 'svelte-routing';
  import { isAdmin, checkAdmin } from '../../stores/adminStore';
  import { fetchGet } from '../../util/fetchUtil';
  import { navigate } from 'svelte-routing';
  import toastr from 'toastr';

  async function logOut() {
    try {
      const result = await fetchGet('/auth/logout');
      if (result.ok) {
        toastr.info(result.data.message, 'succes');
        navigate('/');
      } else {
        toastr.warning(result.data.message, 'error');
      }
    } catch (error) {
      toastr.warning(error, 'error');
    }
  }

  onMount(() => {
    checkAdmin();
  });
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
    <Link to="/overview">Overview</Link>
    {#if $isAdmin}
      <Link to="/admin">Admin</Link>
    {/if}
    <Link to="/" on:click={logOut}>Sign Out</Link>
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
</style>
