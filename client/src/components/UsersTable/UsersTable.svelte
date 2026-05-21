<script>
  import { onMount } from 'svelte';
  import { fetchGet, fetchDelete } from '../../util/fetchUtil';

  let users = $state([]);

  onMount(async () => {
    const { data } = await fetchGet('/users');
    users = data;
  });

  async function deleteUser(userID) {
    await fetchDelete(`/users/${userID}`);
    users = users.filter((user) => user.id !== userID);
  }
</script>

<table class="table-container">
  <thead>
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Password</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr class="table-users">
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>{user.role}</td>
        <td
          ><button onclick={() => deleteUser(user.id)} class="delete-btn"
            ><i class="fa-regular fa-trash-can"></i></button
          ></td
        >
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .table-container {
    width: 100%;
    padding: 2rem;
  }

  .table-users:nth-child(odd) {
    background-color: #1f1f38;
  }
  .delete-btn {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #ef4444;
    font-size: larger;
  }
</style>
