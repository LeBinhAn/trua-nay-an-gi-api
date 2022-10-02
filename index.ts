import express, { Express, Request, Response } from "express";

const app: Express = express();

const port = 8000;

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.get('/dish', (req: Request, res: Response) => {
  const dish = {
    name: "Mi 🍜",
    price: "35000",
    currency: "VND",
  };

  res.send(dish)
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});