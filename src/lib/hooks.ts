import { useState, useEffect } from 'react';
import { FeedbackItemType } from './types';

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );
        if (!res.ok) {
          throw Error();
        }
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { feedbackItems, isLoading, errorMessage, setFeedbackItems };
}
