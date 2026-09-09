import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import userRoutes from './routes/users.routes.js';
import { connectToSocket } from './cotrollers/socketManager.js';
dotenv.config();
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set('port', process.env.PORT || 8080);
app.use(cors({ credentials: true, origin: '*' }));
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ limit: '40kb', extended: true }));
app.use('/api/v1/users', userRoutes);

let start = async () => {
  const con = await mongoose.connect(process.env.MONGO_URL);
  console.log(`result of db ${con.connection.host}`);
  server.listen(app.get('port'), () => {
    console.log(`port is working to ${process.env.PORT}`);
  });
};

start();
