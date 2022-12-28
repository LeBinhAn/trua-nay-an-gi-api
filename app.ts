import express, { Express } from "express";
import errorHandler from "./utilities/errorHandler";
import routes from "./routes";
import "./database";

const app: Express = express();

const port = process.env.NODE_LOCAL_PORT || 8080;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.use("/", routes);

errorHandler(app);
