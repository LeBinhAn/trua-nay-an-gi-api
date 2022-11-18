import express, { Express, Request, Response } from "express";
import routes from "./routes";

const app: Express = express();

const port = 8080;

app.use("/", routes);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});