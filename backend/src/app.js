import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/in', (req, res) => {
  res.status(httpStatus.OK).send({ name: 'rahul', data: 'kam chor' });
});

let start = async () => {
  const con = await mongoose.connect(process.env.MONGO_URL);
  console.log(`result of db ${con.connection.host}`);
  server.listen(process.env.PORT || 8080, () => {});
};

start();
