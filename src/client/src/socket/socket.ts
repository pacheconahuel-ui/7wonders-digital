import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '@7wonders/shared';

// Empty string = use Vite proxy (/socket.io → localhost:3001). Works on LAN too.
const SERVER_URL = import.meta.env.VITE_SERVER_URL ?? '';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SERVER_URL, {
  autoConnect: false,
});
