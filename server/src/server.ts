import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"]; //For production, add CLIENT_URL to environment, update the origin dynamically

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allows cookies if needed
  })
);

app.get("/", (_req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});