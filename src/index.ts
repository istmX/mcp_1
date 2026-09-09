import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.get('/', (_req, res) => {
  res.send('Hello from Express + TypeScript');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
