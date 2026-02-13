import { Request, Response } from "express";
import { getAllInternsService } from "../services/internService";

export const getAllInterns = async (_req: Request, res: Response) => {
  try {
    const interns = await getAllInternsService();
    res.status(200).json(interns);
  }
  catch (error) {
    res.status(500).json({
      error: "Failed to fetch interns. Please try again later"
    });
  }
};