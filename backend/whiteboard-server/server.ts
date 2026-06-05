// server.ts
import Fastify from 'fastify';
import { Server } from 'socket.io';

const fastify = Fastify({ logger: true });

fastify.get('/health', async () => ({ status: 'ok' }));

const start = async () => {
  await fastify.listen({ port: 3001, host: '0.0.0.0' });

  const io = new Server(fastify.server, {
    cors: { origin: 'http://localhost:3000' }, // your Next.js dev URL
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('stroke:add', (stroke) => {
      // console.log('stroke needed to be add in all of the client ')
      socket.broadcast.emit('stroke:added', stroke);
    });

    socket.on('disconnect', () => console.log('Client disconnected:', socket.id));

  });


};

start();
