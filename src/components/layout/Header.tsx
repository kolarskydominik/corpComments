import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../ui/Logo';
import PageHeading from '../ui/PageHeading';
import Pattern from '../ui/Pattern';

type HeaderProps = {
  onAddFeedbackToList: (text: string) => void;
};

export default function Header({ onAddFeedbackToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddFeedbackToList={onAddFeedbackToList} />
    </header>
  );
}
