import { Router } from "express";

import GoleirosController from "../modules/goleiros/goleiros.controller";

const router = Router();

router.get("/", GoleirosController.index);
router.get("/:id", GoleirosController.show);
router.post("/", GoleirosController.store);
router.put("/:id", GoleirosController.update);
router.delete("/:id", GoleirosController.delete);

export default router;
