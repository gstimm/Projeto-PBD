import { Router } from "express";

import CompeticoesController from "../modules/competicoes/competicoes.controller";

const router = Router();

router.get("/", CompeticoesController.index);
router.get("/:id", CompeticoesController.show);
router.post("/", CompeticoesController.store);
router.put("/:id", CompeticoesController.update);
router.delete("/:id", CompeticoesController.delete);

export default router;
