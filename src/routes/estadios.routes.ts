import { Router } from "express";

import EstadiosController from "../modules/estadios/estadios.controller";

const router = Router();

router.get("/", EstadiosController.index);
router.get("/:id", EstadiosController.show);
router.post("/", EstadiosController.store);
router.put("/:id", EstadiosController.update);
router.delete("/:id", EstadiosController.delete);

export default router;
