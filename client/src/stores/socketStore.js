import { writable } from 'svelte/store';
import { io } from 'socket.io-client';
import { BASE_URL } from './storesConfig';
import { messageList } from './messageList';
import { currentMessage } from './currentMessage';

function connectSocket() {
  const socket = io(BASE_URL, {
    withCredentials: true,
  });

  socket.on('server-sends-message', (data) => {
    console.log(data);
    currentMessage.set(data.data);
    messageList.update((messageList) => [
      ...messageList,
      {
        characterName: data.characterName,
        timeSubmitted: data.timeSubmitted,
        message: data.message,
      },
    ]);
  });

  return socket;
}

export const socket = connectSocket();
