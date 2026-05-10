<script>
  import { navigate } from 'svelte-routing';
  import { fetchGet, fetchPost } from '../../util/fetchUtil.js';
  import toastr from 'toastr';
  import 'toastr/build/toastr.min.css';

  let username = '';
  let password = '';

  async function handleLogin(event) {
    event.preventDefault();

    const result = await fetchPost('/auth/login', { username, password });

    if (result.ok) {
      toastr.info(result.data.message, 'success');
      navigate('/overview');
    } else {
      toastr.warning(result.data.message, 'error');
    }
  }
</script>

<div id="loginCard" class="login-card">
  <form on:submit={handleLogin}>
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Type here..."
      bind:value={username}
    />
    <br />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Type here..."
      bind:value={password}
    />
    <br />
    <button class="sign-in-button" type="submit">Sign In</button>
  </form>
</div>

<style>
  .login-card {
    width: 100%;
    max-width: 20vw;
    padding: 1em;
    background-color: rgba(14, 22, 38, 0.86);
    border: 1px solid rgba(79, 93, 122, 0.35);
    border-radius: 10px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 8px;
    color: #a8b0c0;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1vh;
    padding: 1em;
    color: #e5e7eb;
    background-color: #1a2433;
    border: 1px solid #334155;
    border-radius: 7px;
    font-size: large;
    outline: none;
  }

  input::placeholder {
    color: #7f8795;
    opacity: 40%;
  }

  input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }

  .sign-in-button {
    font-size: large;
    align-self: center;
    width: 33%;
    padding: 2%;
    border-radius: 5%;
    font-weight: bolder;
    cursor: pointer;
    margin: 1%;
    color: white;
    background: #2f7bff;
    border: none;
  }

  .sign-in-button:hover {
    box-shadow: 0px 0px 25px rgba(37, 99, 235, 0.35);
  }
</style>
