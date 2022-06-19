import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EstadiosController {
  async index(req: Request, res: Response) {
    const estadios = await prisma.estadios.findMany();
    return res.json(estadios);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const estadio = await prisma.estadios.findUnique({
      where: { id: Number(id) },
    });
    return res.json(estadio);
  }

  async store(req: Request, res: Response) {
    const estadio = await prisma.estadios.create({
      data: {
        nome: req.body.nome,
        cidade: req.body.cidade,
        capacidade: req.body.capacidade,
      },
    });

    const estadios = await prisma.estadios.findMany();

    return res.json({ estadio, estadios });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const estadio = await prisma.estadios.update({
      where: { id: Number(id) },
      data: {
        nome: req.body.nome,
        cidade: req.body.cidade,
        capacidade: req.body.capacidade,
        partidasSediadas: req.body.partidasSediadas,
      },
    });

    return res.json(estadio);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.estadios.delete({
      where: { id: Number(id) },
    });

    return res.json({ message: "Estadio deletado com sucesso!" });
  }
}
export default new EstadiosController();
