import { Router } from "express";
import { getAllInterns, createIntern } from "../controllers/internController";

const router = Router();
router.get("/", getAllInterns);
router.post("/", createIntern);
export default router;