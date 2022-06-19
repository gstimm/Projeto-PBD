import { Router } from "express";

import PartidasController from "../modules/partidas/partidas.controller";

const router = Router();

router.get("/", PartidasController.index);
router.get("/:id", PartidasController.show);
router.post("/", PartidasController.store);
router.put("/:id", PartidasController.update);
router.delete("/:id", PartidasController.delete);

export default router;
