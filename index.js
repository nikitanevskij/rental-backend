import express from 'express';

const app = express(); // создаем сервер

app.get('/', async (req, res) => {
  try {
    res.send('Hello Rental!!');
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать статью',
    });
  }
});

app.listen(3333, (err) => {
  if (err) console.log(err);
  console.log('server ok');
}); //запускаем сервер на нужном порте
