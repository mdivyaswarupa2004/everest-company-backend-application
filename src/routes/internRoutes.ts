import { Router } from "express";
import { getAllInterns } from "../controllers/internController";

const router = Router();
router.get("/", getAllInterns);
export default router;
