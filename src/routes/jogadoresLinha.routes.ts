import { Router } from "express";

import JogadoresLinhaController from "../modules/jogadoresLinha/jogadoresLinha.controller";

const router = Router();

router.get("/", JogadoresLinhaController.index);
router.get("/:id", JogadoresLinhaController.show);
router.post("/", JogadoresLinhaController.store);
router.put("/:id", JogadoresLinhaController.update);
router.delete("/:id", JogadoresLinhaController.delete);

export default router;
