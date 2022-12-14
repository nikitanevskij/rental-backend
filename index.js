import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation } from './validation.js';
import * as UserController from './controllers/UserController.js';

const app = express(); // создаем сервер

mongoose
  .connect()
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => console.log(err)); // подключили наш кластер(БД)

app.use(express.json()); //позволяет читать нам (нашему коду) json файлы который пришли в наших запросах

app.post('/auth/register', registerValidation, UserController.register);
app.post('/auth/login', loginValidation, UserController.login);

app.listen(3333, (err) => {
  if (err) console.log(err);
  console.log('server ok');
}); //запускаем сервер на нужном порте
