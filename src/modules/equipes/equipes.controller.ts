import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EquipesController {
  async index(req: Request, res: Response) {
    const equipes = await prisma.equipes.findMany();
    return res.json(equipes);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const equipe = await prisma.equipes.findUnique({
      where: { id: Number(id) },
    });
    return res.json(equipe);
  }

  async store(req: Request, res: Response) {
    const equipe = await prisma.equipes.create({
      data: {
        pais: req.body.pais,
        ano: req.body.ano,
      },
    });

    const equipesDaEdicao = await prisma.equipes.findMany({
      where: { ano: req.body.ano },
    });

    return res.json({ equipe, equipesDaEdicao });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const equipe = await prisma.equipes.update({
      where: { id: Number(id) },
      data: {
        competicoesGanhas: req.body.competicoesGanhas,
        comissaoDaEquipe: req.body.comissaoDaEquipe,
        jogadoresLinhaDaEquipe: req.body.jogadoresLinhaDaEquipe,
        goleirosDaEquipe: req.body.goleirosDaEquipe,
        numeroDeVitorias: req.body.numeroDeVitorias,
        numeroDeDerrotas: req.body.numeroDeDerrotas,
        numeroDeEmpates: req.body.numeroDeEmpates,
        golsPro: req.body.golsPro,
        golsContra: req.body.golsContra,
        saldoDeGols: req.body.saldoDeGols,
      },
    });

    return res.json(equipe);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.equipes.delete({
      where: { id: Number(id) },
    });

    return res.json({ ok: true });
  }
}
export default new EquipesController();
