import FeedbackItem from './FeedbackItem';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import { FeedbackItemType } from '../../lib/types';

type FeedbackListProps = {
  feedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
