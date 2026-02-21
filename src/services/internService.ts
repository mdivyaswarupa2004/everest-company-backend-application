import InternModel from "../models/intern";

export const getAllInternsService = async () => {
  return await InternModel.findAll();
};
export const createInternService = async (data: any) => {
  return await InternModel.create(data);
};