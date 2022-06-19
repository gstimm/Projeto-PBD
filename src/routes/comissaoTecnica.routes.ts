import { Router } from "express";

import ComissaoTecnicaController from "../modules/comissaoTecnica/comissaoTecnica.controller";

const router = Router();

router.get("/", ComissaoTecnicaController.index);
router.get("/:id", ComissaoTecnicaController.show);
router.post("/", ComissaoTecnicaController.store);
router.put("/:id", ComissaoTecnicaController.update);
router.delete("/:id", ComissaoTecnicaController.delete);

export default router;
