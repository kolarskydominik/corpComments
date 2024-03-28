import { TriangleUpIcon } from '@radix-ui/react-icons';
import { FeedbackItemType } from '../../lib/types';
import { useState } from 'react';

type FeedbackItemProps = {
  feedbackItem: FeedbackItemType;
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? 'feedback--expand' : ''}`}
    >
      <button onClick={handleClick}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
