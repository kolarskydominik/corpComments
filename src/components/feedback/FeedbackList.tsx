import FeedbackItem from './FeedbackItem';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import {useFeedbackItemsContext} from '../../contexts/FeedbackItemsContextProvider';

export default function FeedbackList() {
  const { filteredFeedbackItems, isLoading, errorMessage } = useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
