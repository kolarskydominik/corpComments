import { useState } from 'react';
import { MAX_CHARS } from '../../lib/constans';

type FeedbackFormProps = {
  onAddFeedbackToList: (text: string) => void;
};
export default function FeedbackForm({
  onAddFeedbackToList,
}: FeedbackFormProps) {
  const [showValidIdicator, setShowValidIdicator] = useState(false);
  const [showInvalidIdicator, setShowInvalidIdicator] = useState(false);
  const [text, setText] = useState('');
  const charCount = MAX_CHARS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.includes('#') && text.length >= 5) {
      setShowValidIdicator(true);
      setTimeout(() => setShowValidIdicator(false), 2000);
    } else {
      setShowInvalidIdicator(true);
      setTimeout(() => setShowInvalidIdicator(false), 2000);
    }
    onAddFeedbackToList(text);
    setText('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`form ${showValidIdicator ? 'form--valid' : ''} ${
          showInvalidIdicator ? 'form--invalid' : ''
        }`}
      >
        <textarea
          value={text}
          id="feedback-textarea"
          placeholder="blabla"
          spellCheck={false}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="feedback-textarea">
          Enter your feedback here, remember to #hashtag to company
        </label>
        <div>
          <p className="u-italic">{charCount}</p>
          <button type="submit">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
}
