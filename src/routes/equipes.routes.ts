import { Router } from "express";

import EquipesController from "../modules/equipes/equipes.controller";

const router = Router();

router.get("/", EquipesController.index);
router.get("/:id", EquipesController.show);
router.post("/", EquipesController.store);
router.put("/:id", EquipesController.update);
router.delete("/:id", EquipesController.delete);

export default router;
