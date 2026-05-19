<script>
  import io from 'socket.io-client';
  import { BASE_URL } from '../../stores/storesConfig';
  import { onMount } from 'svelte';
  import { currentMessage } from '../../stores/currentMessage';
  import { messageList } from '../../stores/messageList';

  let socket;

  let messageInput = '';

  onMount(() => {
    if (socket) {
      return;
    }

    socket = io(BASE_URL, {
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
    messageInput = '';
  }
</script>

<div class="chatroom">
  <div class="messages-display">
    {#each $messageList as messageItem}
      <div class="user-message-entry">
        <span class="username">{messageItem.characterName}</span>
        <span class="timestamp">{messageItem.timeSubmitted} :</span>
        <span class="user-message-value">{messageItem.message}</span>
      </div>
    {/each}
  </div>
  <div class="input-row">
    <input
      type="text"
      bind:value={messageInput}
      class="message-input-field"
      placeholder="Say Something"
    />
    <button class="submit-btn" onclick={submitMessage}>
      <i class="fa-regular fa-paper-plane"></i>
    </button>
  </div>
</div>

<style>
  .chatroom {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    gap: 8px;
    overflow: hidden;
  }

  .messages-display {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: #12122a;
    border: 1px solid #2a2a4a;
    border-radius: 6px;
    padding: 10px;
  }

  .input-row {
    height: 5vh;
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .message-input-field {
    flex: 1;
    min-width: 0;
    width: 100%;
    text-align: center;
    font-size: medium;
    background-color: #1e1e3a;
    border: 1px solid #2a2a4a;
    border-radius: 6px;
    color: white;
    padding: 2px 0;
  }

  .user-message-entry {
    display: flex;
    gap: 6px;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .username {
    font-weight: bold;
    color: #a855f7;
  }

  .timestamp {
    color: #c4c4c4;
  }

  .user-message-value {
    justify-content: center;
  }

  .submit-btn {
    background-color: #2a2a4a00;
    color: white;
    border: none;
    padding: 3px 10px;
    font-size: x-large;
    cursor: pointer;
  }

  .submit-btn:hover {
    scale: 1.5;
  }
</style>
