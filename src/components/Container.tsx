import FeedbackList from './FeedbackList';
import Header from './Header';
import { FeedbackItemType } from './lib/types';

type ContainerProps = {
  feedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
  handleAddFeedbackToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddFeedbackToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header onAddFeedbackToList={handleAddFeedbackToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
