import { Request, Response } from "express";
import { getAllInternsService, createInternService } from "../services/internService";
import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
const sns = new AWS.SNS({ region: process.env.AWS_REGION });
export const getAllInterns = async (_req: Request, res: Response) => {
  try {
    const interns = await getAllInternsService();
    res.status(200).json(interns);
  }
  catch (error) {
    res.status(500).json(error);
  }
};
export const createIntern = async (req: Request, res: Response) => {
  try {
    const intern = await createInternService(req.body);
    await sns.publish({
      TopicArn: process.env.SNS_TOPIC_ARN!,
      Message: `New Intern joined to Everest Company: ${intern.name}`,
      Subject: "Information about your Details"
    }).promise();
    res.status(201).json(intern);
  }
  catch (error) {
    res.status(500).json(error);
  }
};