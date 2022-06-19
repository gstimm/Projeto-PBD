import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GoleirosController {
  async index(req: Request, res: Response) {
    const { equipeID, ano } = req.query;

    if (equipeID && ano) {
      const goleiros = await prisma.goleiro.findMany({
        where: {
          equipeId: Number(equipeID),
          ano: Number(ano),
        },
      });
      return res.json(goleiros);
    }
    const goleiro = await prisma.goleiro.findMany();
    return res.json(goleiro);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const goleiro = await prisma.goleiro.findUnique({
      where: { id: Number(id) },
    });
    return res.json(goleiro);
  }

  async store(req: Request, res: Response) {
    const goleiro = await prisma.goleiro.create({
      data: {
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        passaporte: req.body.passaporte,
        ano: Number(req.body.ano),
        idade: Number(req.body.idade),
        equipe: {
          connect: {
            id: Number(req.body.equipe),
          },
        },
      },
    });

    const goleirosDaEdicao = await prisma.goleiro.findMany({
      where: { ano: req.body.ano },
    });

    return res.json({ goleiro, goleirosDaEdicao });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const goleiro = await prisma.goleiro.update({
      where: { id: Number(id) },
      data: {
        ano: req.body.ano,
        idade: req.body.idade,
        equipe: req.body.equipe,
        defesas: req.body.defesas,
        golsSofridos: req.body.golsSofridos,
        cartoesAmarelos: req.body.cartoesAmarelos,
        cartoesVermelhos: req.body.cartoesVermelhos,
      },
    });

    return res.json(goleiro);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.goleiro.delete({
      where: { id: Number(id) },
    });

    return res.json({ message: "Goleiro deletado com sucesso!" });
  }
}

export default new GoleirosController();
