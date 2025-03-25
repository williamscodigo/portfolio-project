import type { FeedbackData } from '../interfaces/FeedbackData';


const processFeedback = async (body: FeedbackData) => {
  try {
    const response = await fetch('/api/feedback/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from Feedback Creation: ', err);
    return Promise.reject('Could not create feedback');
  }
};

export {
  processFeedback,
};
