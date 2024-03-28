import { useState, useEffect } from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HashtagList from './components/HashtagList';
import { FeedbackItemType } from './components/lib/types';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddFeedbackToList = (text: string) => {
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .substring(1);

    const newFeedbackItem = {
      id: Date.now(),
      upvoteCount: 0,
      badgeLetter: companyName[0].toUpperCase(),
      companyName: companyName,
      text: text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newFeedbackItem]);
  };

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

  return (
    <div className="app">
      <Footer />
      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddFeedbackToList={handleAddFeedbackToList}
      />
      <HashtagList />
    </div>
  );
}

export default App;
