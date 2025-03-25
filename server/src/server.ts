import express from "express";
import { feedbackRouter } from './routes/feedbackRouter.js';
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

// Middleware to parse JSON requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

// Use the feedback route with `/api/feedback`
app.use('/api/feedback', feedbackRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});