import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PartidasController {
  async index(req: Request, res: Response) {
    const { ano } = req.query;

    if (ano) {
      const partidas = await prisma.partidas.findMany({
        where: {
          ano: Number(ano),
        },
      });
      return res.json(partidas);
    }
    const partidas = await prisma.partidas.findMany();
    return res.json(partidas);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const partida = await prisma.partidas.findUnique({
      where: { id: Number(id) },
    });
    return res.json(partida);
  }

  async store(req: Request, res: Response) {
    const partida = await prisma.partidas.create({
      data: {
        competicao: {
          connect: {
            id: req.body.competicao,
          },
        },
        ano: req.body.ano,
        dataJogo: req.body.dataJogo,
        estadio: {
          connect: {
            id: req.body.estadio,
          },
        },
        nomeEstadio: req.body.nomeEstadio,
        equipe1: req.body.equipe1,
        equipe2: req.body.equipe2,
        fase: req.body.fase,
      },
    });

    const partidasDaEdicao = await prisma.partidas.findMany({
      where: { ano: req.body.ano },
    });

    return res.json({ partida, partidasDaEdicao });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const partida = await prisma.partidas.update({
      where: { id: Number(id) },
      data: {
        dataJogo: req.body.dataJogo,
        estadio: req.body.estadio,
        nomeEstadio: req.body.nomeEstadio,
        equipe1: req.body.equipe1,
        equipe2: req.body.equipe2,
        fase: req.body.fase,
        golsEquipe1: req.body.golsEquipe1,
        golsEquipe2: req.body.golsEquipe2,
        vencedor: req.body.vencedor,
      },
    });

    return res.json(partida);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.partidas.delete({
      where: { id: Number(id) },
    });

    return res.json({ message: "Partida deletada com sucesso!" });
  }
}
export default new PartidasController();

