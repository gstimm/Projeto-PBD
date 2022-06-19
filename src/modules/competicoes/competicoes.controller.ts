import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CompeticoesController {
  async index(req: Request, res: Response) {
    const competicoes = await prisma.competicao.findMany();
    return res.json(competicoes);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const competicao = await prisma.competicao.findUnique({
      where: { id: Number(id) },
    });
    return res.json(competicao);
  }

  async store(req: Request, res: Response) {
    const competicao = await prisma.competicao.create({
      data: {
        ano: req.body.ano,
        paisSede: req.body.paisSede,
      },
    });

    const competicoes = await prisma.competicao.findMany();

    return res.json({ competicao, competicoes });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const competicao = await prisma.competicao.update({
      where: { id: Number(id) },
      data: {
        ano: req.body.ano,
        paisSede: req.body.paisSede,
        campeao: req.body.campeao,
        numeroDeEquipes: req.body.numeroDeEquipes,
        partidas: req.body.partidas,
      },
    });

    return res.json(competicao);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.competicao.delete({
      where: { id: Number(id) },
    });

    const competicoes = await prisma.competicao.findMany();

    return res.json({ competicoes });
  }
}

export default new CompeticoesController();
