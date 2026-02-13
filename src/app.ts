import express from "express";
import internRoutes from "./routes/internRoutes";
const app = express();
app.use(express.json());
app.use("/interns", internRoutes);
export default app;
