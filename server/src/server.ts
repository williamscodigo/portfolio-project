import express from "express";
import routes from './routes/index.js';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"]; //For production, add CLIENT_URL to environment, update the origin dynamically

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allows cookies if needed
  })
);

// Serves static files in the entire client's dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/dist'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});