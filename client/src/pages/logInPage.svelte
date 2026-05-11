<script>
  import Login from '../components/Login/Login.svelte';
  import Logo from '../assets/Icon.png';
</script>

<div class="login-page">
  <div class="content">
    <div class="login-header">
      <img class="logo" src={Logo} alt="ReRoll" />
      <h1>ReRoll</h1>
      <span>3D Dice Roller & Character Manager </span>
    </div>
    <Login></Login>
  </div>
</div>

<style>
  .login-page {
    height: 100vh;
    width: auto;
    background-image: linear-gradient(to bottom right, black, hsl(240, 58%, 8%), black);
  }

  .logo {
    width: 40%;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
  }

  .login-header {
    text-align: center;
    margin-bottom: 28px;
    padding: 2%;
  }

  .login-header h1 {
    margin: 0;
    font-weight: bold;
    font-family: 'Cinzel', serif;
    line-height: 1;
    color: white;
  }

  .login-header span {
    margin-top: 8px;
    color: #8b95a7;
    font-size: 0.9rem;
  }
</style>
