import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ComissaoTecnicaController {
  async index(req: Request, res: Response) {
    const { equipeID, ano } = req.query;

    if (equipeID && ano) {
      const comissaoTecnica = await prisma.comissaoTecnica.findMany({
        where: {
          equipeId: Number(equipeID),
          ano: Number(ano),
        },
      });
      return res.json(comissaoTecnica);
    }

    const comissaoTecnica = await prisma.comissaoTecnica.findMany();
    return res.json(comissaoTecnica);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const comissaoTecnica = await prisma.comissaoTecnica.findUnique({
      where: { id: Number(id) },
    });
    return res.json(comissaoTecnica);
  }

  async store(req: Request, res: Response) {
    const comissaoTecnica = await prisma.comissaoTecnica.create({
      data: {
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        passaporte: req.body.passaporte,
        funcao: req.body.funcao,
        idade: Number(req.body.idade),
        ano: Number(req.body.ano),
        equipe: {
          connect: {
            id: Number(req.body.equipe),
          },
        },
      },
    });

    const comissaoTecnicaDaEdicao = await prisma.comissaoTecnica.findMany({
      where: { ano: req.body.ano },
    });

    return res.json({ comissaoTecnica, comissaoTecnicaDaEdicao });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const comissaoTecnica = await prisma.comissaoTecnica.update({
      where: { id: Number(id) },
      data: {
        funcao: req.body.funcao,
        idade: req.body.idade,
        equipe: req.body.equipe,
      },
    });

    return res.json(comissaoTecnica);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.comissaoTecnica.delete({
      where: { id: Number(id) },
    });

    return res.json({ message: "Comissão técnica deletada com sucesso!" });
  }
}

export default new ComissaoTecnicaController();
