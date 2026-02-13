import app from "./app";
import sequelize from "./config/database";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
  catch (error) {
    console.log("Error:", error);
  }
}
startServer();