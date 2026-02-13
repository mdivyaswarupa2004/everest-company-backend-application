import InternModel from "../models/intern";

export const getAllInternsService = async () => {
  return await InternModel.findAll();
};