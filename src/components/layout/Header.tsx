import { useFeedbackItemsContext } from '../../contexts/FeedbackItemsContextProvider';
import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../ui/Logo';
import PageHeading from '../ui/PageHeading';
import Pattern from '../ui/Pattern';

export default function Header() {
  const { handleAddFeedbackToList } = useFeedbackItemsContext();

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddFeedbackToList={handleAddFeedbackToList} />
    </header>
  );
}
