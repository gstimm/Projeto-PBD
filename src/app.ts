import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import {
  CompeticaoRoutes,
  ComissaoTecnicaRoutes,
  EquipesRoutes,
  GoleirosRoutes,
  EstadiosRoutes,
  JogadoresLinhaRoutes,
  PartidasRoutes,
} from "./routes/index";

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
    this.app.use(
      cors({
        origin: "*",
      })
    );
  }

  routes() {
    this.app.use("/competicao", CompeticaoRoutes);
    this.app.use("/partidas", PartidasRoutes);
    this.app.use("/equipes", EquipesRoutes);
    this.app.use("/estadios", EstadiosRoutes);
    this.app.use("/jogadores-linha", JogadoresLinhaRoutes);
    this.app.use("/goleiros", GoleirosRoutes);
    this.app.use("/comissao-tecnica", ComissaoTecnicaRoutes);
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });
  }
}

export default new App().app;
