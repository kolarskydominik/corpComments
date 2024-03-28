import FeedbackForm from './FeedbackForm';
import Logo from './Logo';
import PageHeading from './PageHeading';
import Pattern from './Pattern';

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
