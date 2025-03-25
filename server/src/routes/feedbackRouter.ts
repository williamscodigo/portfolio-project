import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

// POST /feedback - process feedback
router.post('/', async (req: Request, res: Response) => {
  try {
    // Debugging: Log the received data
    console.log("Data received on backend:", req.body);

    // Simulate feedback processing (e.g., sending an email)
    // TODO: Implement email sending logic here

    // Send a proper JSON response
    res.status(201).json({ message: 'Feedback received successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as feedbackRouter };
