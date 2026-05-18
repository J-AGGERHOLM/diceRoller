<script>
  import io from 'socket.io-client';
  import { BASE_URL } from '../../stores/storesConfig';
  import { onMount } from 'svelte';
  import { currentMessage } from '../../stores/currentMessage';
  import { messageList } from '../../stores/messageList';

  let socket;

  let messageInput = '';

  onMount(() => {
    socket = io($BASE_URL, {
      withCredentials: true,
    });

    socket.on('server-sends-message', (data) => {
      console.log('incoming message: ', data.data);
      currentMessage.set(data.data);

      messageList.update((messageList) => {
        messageList.push({
          characterName: data.characterName,
          timeSubmitted: data.timeSubmitted,
          message: data.data,
        });
        return messageList;
      });
    });
  });

  function submitMessage() {
    socket.emit('client-sends-message', { data: messageInput });
  }
</script>

{#each $messageList as messageItem}
  <div>{messageItem.characterName} |{messageItem.timeSubmitted}| : {messageItem.message}</div>
{/each}

<input type="text" bind:value={messageInput}>
<button onclick={submitMessage}> Submit Message </button>
