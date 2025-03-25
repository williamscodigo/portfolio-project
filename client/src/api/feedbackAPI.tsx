import type { FeedbackData } from '../interfaces/FeedbackData';

const processFeedback = async (body: FeedbackData) => {
  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Invalid API response: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error from Feedback processing:', err);
    return Promise.reject('Could not process feedback');
  }
};

export { processFeedback };
