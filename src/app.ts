import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CompeticaoRoutes } from "./routes/index";

class App {
  public app: express.Application;
  public prisma = new PrismaClient();

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });
    this.app.use("/competicao", CompeticaoRoutes);
  }
}

export default new App().app;
