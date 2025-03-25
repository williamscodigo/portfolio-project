import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

// POST /feedback - process feedback
router.post('/', async (req: Request, res: Response) => {
  try {
    // const newFeedback = await Feedback.create(req.body);
    // res.status(201).json(newFeedback);
    //process feed back here, note: no database just send email with data

    //debugging line
    if(req) res.status(201).json({msg: 'email sent successfully'});
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as feedbackRouter };
