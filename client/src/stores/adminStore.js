import toastr from 'toastr';
import { fetchGet } from '../util/fetchUtil';
import { writable } from 'svelte/store';

export let isAdmin = writable(false);

export async function checkAdmin() {
  try {
    const result = await fetchGet('/auth/authorize');
    if (result.ok) {
      isAdmin.set(true);
    } else {
      isAdmin.set(false);
    }
  } catch (error) {
    toastr.warning(error, 'Could not connect to server');
  }
}
